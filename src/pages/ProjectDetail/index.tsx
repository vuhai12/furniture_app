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
  return (
    <ProjectLayout>
      {infoProjectDetail != undefined && (
        <div className="mb-[50px]">
          <h1 className="text-[35px] text-black font-semibold">
            {infoProjectDetail.title}
          </h1>
          <div className="flex gap-[50px] mt-[30px] md:flex-row flex-col">
            <div className="flex-1 flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[20px] border-b-[1px] border-gray-400 py-[10px]">
                <h3 className="text-black text-[18px] font-semibold">
                  ADDRESS
                </h3>
                <p className="text-gray-500 text-[16px]">
                  {infoProjectDetail.address}
                </p>
              </div>
              <div className="flex flex-col gap-[20px] border-b-[1px] border-gray-400 py-[10px]">
                <h3 className="text-black text-[16px] font-semibold">YEAR</h3>
                <p className="text-gray-500 text-[16px]">
                  {infoProjectDetail.year}
                </p>
              </div>
              <div className="flex flex-col gap-[20px] border-b-[1px] border-gray-400 py-[10px]">
                <h3 className="text-black text-[16px] font-semibold">STATUS</h3>
                <p className="text-gray-500 text-[16px]">
                  {infoProjectDetail.status}
                </p>
              </div>
            </div>
            <div className="flex-1 text-[15px] text-gray-500">
              <p>{infoProjectDetail.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] mt-[20px]">
            {infoProjectDetail.images.map((item) => {
              return (
                <div className="h-[500px] w-full">
                  <img src={item} className="object-cover w-full h-full" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </ProjectLayout>
  );
};

export default ProjectDetail;
