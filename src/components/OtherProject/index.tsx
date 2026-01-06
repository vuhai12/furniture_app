import { getProjectsService } from "@services/projects.service";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OtherProject = () => {
  const [curentSlide, setCurrentSlide] = useState(0);
  const [listProject, setListProject] = useState<
    { id: string; description: string; title: string; cover_image: string }[]
  >([]);

  const navigate = useNavigate();
  const { categorySlug } = useParams();

  const getProjects = async () => {
    try {
      const data = await getProjectsService();
      setListProject(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handlePreSlide = () => {
    setCurrentSlide(
      (pre) => (pre - 1 + listProject.length) % listProject.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((pre) => (pre + 1) % listProject.length);
  };

  useEffect(() => {
    if (listProject.length === 0) return;
    const intervalId = setInterval(() => {
      setCurrentSlide((pre) => (pre + 1) % listProject.length);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [listProject.length]);

  return (
    <div className="py-[50px]">
      <div className="flex justify-between items-center">
        <h3 className="text-black text-[33px] font-semibold">Other Projects</h3>
        <div className="flex gap-[10px]">
          <ChevronLeft
            className="w-8 h-8 cursor-pointer"
            onClick={handlePreSlide}
          />
          <ChevronRight
            className="w-8 h-8 cursor-pointer"
            onClick={handleNextSlide}
          />
        </div>
      </div>

      <div className="h-[300px]  mt-[30px] overflow-hidden">
        <div
          style={{
            transform:
              window.innerWidth >= 640
                ? `translateX(calc(-${curentSlide} * ((100% - 60px)/3 + 30px)))`
                : `translateX(calc(-${curentSlide} * ((100%) + 30px)))`,
            transition: "transform 0.4s ease",
          }}
          className=" flex gap-[30px] h-full  w-full"
        >
          {listProject &&
            listProject.length > 0 &&
            listProject.map((item) => {
              return (
                <div
                  onClick={() =>
                    navigate(`/projects/${categorySlug}/${item.id}`)
                  }
                  style={{
                    width:
                      window.innerWidth >= 640
                        ? ` calc((100% - 60px)/3)`
                        : "100%",
                  }}
                  className="flex-shrink-0 relative cursor-pointer"
                >
                  <img
                    src={item.cover_image}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                  <div className="absolute bottom-[20px] px-[20px] py-[20px]">
                    <h3 className="font-semibold text-white text-[16px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OtherProject;
