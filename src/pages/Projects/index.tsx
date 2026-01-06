import ProjectLayout from "@layout/ProjectLayout.tsx";
import React, { useEffect, useState } from "react";
import image1 from "@assets/Office/image1.jpg";
import image2 from "@assets/Office/image2.jpg";
import image3 from "@assets/Office/image3.jpg";
import image4 from "@assets/Office/image4.jpg";
import image5 from "@assets/Office/image5.jpg";
import image6 from "@assets/Office/image6.jpg";
import image7 from "@assets/Office/image7.jpg";
import image8 from "@assets/Office/image8.jpg";

import SectionHeroProject from "./SectionHeroProject";
import Pagination from "@components/Pagination";
import OtherProject from "@components/OtherProject";
import { useParams } from "react-router-dom";
import { getProjectsByCategoriesServices } from "@services/categories.services";
import { useApp } from "../../context/AppContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const dataProjects = [
  { id: 1, image: image1, title: "HYATT REGENCY HA LONG - ALL DAY DINING" },
  { id: 2, image: image2, title: "HYATT PLACE HA LONG - KING SUITE" },
  { id: 3, image: image3, title: "GARRYA DA NANG - PUBLIC AREA" },
  { id: 4, image: image4, title: "L'AURORA RESORT - THE FLOW SPA" },
  { id: 5, image: image5, title: "SKY PENTHOUSE" },
  { id: 6, image: image6, title: "L'AURORA RESORT - CLUBHOUSE" },
  { id: 7, image: image7, title: "SKY PENTHOUSE" },
  { id: 8, image: image8, title: "HYATT REGENCY HA LONG - ALL DAY DINING" },
];

const Projects = () => {
  const { categorySlug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [listProjects, setListProjects] = useState<
    { id: string; title: string; description: string; cover_image: string }[]
  >([]);

  const { keyword, listCategories } = useApp();
  const debounceKeyword = useDebounce(keyword, 500);

  const navigate = useNavigate();

  const activeCategoryId = listCategories.find(
    (item) => item.slug == categorySlug
  )?.id;

  useEffect(() => {
    if (!activeCategoryId) return;
    getProjectByCategoryId();
  }, [activeCategoryId, debounceKeyword]);

  const limit = 6;
  const from = (currentPage - 1) * limit;
  const to = from + limit - 1;

  const getProjectByCategoryId = async () => {
    const data = await getProjectsByCategoriesServices(
      activeCategoryId,
      debounceKeyword,
      from,
      to
    );
    setListProjects(data?.data);
  };

  return (
    <ProjectLayout>
      <div>{<SectionHeroProject />}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] mt-[30px] max-w-[900px] mx-auto">
        {listProjects &&
          listProjects.length > 0 &&
          listProjects.map((item) => {
            return (
              <div
                onClick={() => navigate(`/projects/${categorySlug}/${item.id}`)}
                className="relative h-[230px] z-[98] cursor-pointer flex flex-col justify-end"
              >
                <img
                  src={item.cover_image}
                  className="w-full absolute rounded-[5px] h-full object-cover"
                />

                <div className="absolute bg-black bg-opacity-50 inset-0 " />
                <div className="absolute bottom-[20px] px-[20px] py-[20px]">
                  <h3 className="font-semibold text-white text-[16px]">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center mt-[50px]">
        <Pagination
          limit={limit}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalItems={listProjects.length}
        />
      </div>
      <div className="">
        <OtherProject />
      </div>
    </ProjectLayout>
  );
};

export default Projects;
