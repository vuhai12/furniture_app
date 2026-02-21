import ProjectLayout from "@layout/ProjectLayout.tsx";
import { getProjectDetailService } from "@services/projectDetail.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [infoProjectDetail, setInfoProjectDetail] = useState<
    | {
        id: string;
        title: string;
        address: string;
        year: string;
        description: string;
        slug: null | string;
        status: string;
        project_id: string;
        images: string[];
      }
    | undefined
  >(undefined);

  const getProjectDetail = async () => {
    try {
      const data = await getProjectDetailService(projectId);
      setInfoProjectDetail(data.data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getProjectDetail();
  }, []);

  if (!infoProjectDetail) return null;

  return (
    <ProjectLayout>
      <div className="px-4 sm:px-6 lg:px-0 py-10 max-w-6xl mx-auto">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {infoProjectDetail.title}
        </h1>

        {/* INFO + DESCRIPTION */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5">
              <p className="text-sm tracking-widest text-gray-400 uppercase">
                Address
              </p>
              <p className="mt-2 text-gray-800 text-base">
                {infoProjectDetail.address}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <p className="text-sm tracking-widest text-gray-400 uppercase">
                Year
              </p>
              <p className="mt-2 text-gray-800 text-base">
                {infoProjectDetail.year}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <p className="text-sm tracking-widest text-gray-400 uppercase">
                Status
              </p>
              <p className="mt-2 text-gray-800 text-base">
                {infoProjectDetail.status}
              </p>
            </div>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div>
            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
              {infoProjectDetail.description}
            </p>
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className="mt-16 space-y-8">
          {infoProjectDetail.images.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item}
                alt={`project-image-${index}`}
                className="w-full h-[250px] sm:h-[400px] lg:h-[550px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </ProjectLayout>
  );
};

export default ProjectDetail;
