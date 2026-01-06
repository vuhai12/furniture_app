import { ChevronLeft, ChevronRight } from "lucide-react";
import classNames from "classnames";

const Pagination = ({
  totalItems,
  setCurrentPage,
  currentPage,
  limit,
}: {
  totalItems: number;
  setCurrentPage: (page: number | ((page: number) => number)) => void;
  currentPage: number;
  limit: number;
}) => {
  const totalPages = Math.ceil(totalItems / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePre = () => {
    if (currentPage <= 1) return;
    setCurrentPage((page) => page - 1);
  };

  const handleNext = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage((page) => page + 1);
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex gap-[20px]">
      <div
        onClick={handlePre}
        className="cursor-pointer w-[40px] h-[40px] bg-black text-white rounded-[50%] flex justify-center items-center text-[14px]"
      >
        <ChevronLeft className="w-6 h-6" />
      </div>
      <div className="flex gap-[20px] font-semibold">
        {pages.map((page) => {
          return (
            <div
              onClick={() => handleChangePage(page)}
              className={classNames(
                "cursor-pointer w-[40px] h-[40px] text-white rounded-[50%] flex justify-center items-center text-[14px]",
                page == currentPage ? "bg-gray-400 " : "bg-black "
              )}
            >
              {page}
            </div>
          );
        })}
      </div>
      <div
        onClick={handleNext}
        className="cursor-pointer w-[40px] h-[40px] bg-black text-white rounded-[50%] flex justify-center items-center text-[14px]"
      >
        <ChevronRight className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Pagination;
