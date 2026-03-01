import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate, useParams } from "react-router-dom";

import { getProjectsByCategoriesServices } from "@services/categories.services";
import ProjectLayout from "@layout/ProjectLayout";
import SectionHeroProject from "./SectionHeroProject";
import Pagination from "@components/Pagination";
import OtherProject from "@components/OtherProject";
import ProjectSkeleton from "@components/ProjectSkeleton";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  cover_image: string;
};

const Projects = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const { keyword, listCategories } = useApp();

  const [currentPage, setCurrentPage] = useState(1);
  const [listProjects, setListProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  const debounceKeyword = useDebounce(keyword, 500);

  const activeCategoryId = listCategories.find(
    (item) => item.slug === categorySlug,
  )?.id;

  const limit = 6;
  const from = (currentPage - 1) * limit;
  const to = from + limit - 1;

  useEffect(() => {
    if (!activeCategoryId) return;

    const fetchProjects = async () => {
      try {
        setLoading(true);

        const data = await getProjectsByCategoriesServices(
          activeCategoryId,
          debounceKeyword,
          from,
          to,
        );

        setListProjects(data?.data || []);
      } catch (error) {
        console.error(error);
        setListProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeCategoryId, debounceKeyword, currentPage]);

  return (
    <ProjectLayout>
      <SectionHeroProject />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] mt-[30px] max-w-[900px] mx-auto">
        {/* LOADING */}
        {loading ? (
          [...Array(limit)].map((_, i) => <ProjectSkeleton key={i} />)
        ) : listProjects.length > 0 ? (
          listProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/projects/${categorySlug}/${item.id}`)}
              className="relative h-[230px] cursor-pointer flex flex-col justify-end rounded-[20px] overflow-hidden"
            >
              <img
                loading="lazy"
                src={item.cover_image}
                className="w-full absolute h-full object-cover"
                alt={item.title}
              />

              <div className="absolute bg-black/50 inset-0" />

              <div className="absolute bottom-[20px] px-[20px] py-[20px]">
                <h3 className="font-semibold text-white text-[16px]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No projects found
          </p>
        )}
      </div>

      {/* PAGINATION */}
      {!loading && listProjects.length > 0 && (
        <div className="flex justify-center mt-[50px]">
          <Pagination
            limit={limit}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalItems={listProjects.length}
          />
        </div>
      )}

      <OtherProject />
    </ProjectLayout>
  );
};

export default Projects;
