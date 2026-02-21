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
  if (totalPages <= 1) return null;

  const handlePre = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <button
        onClick={handlePre}
        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={classNames(
            "w-10 h-10 rounded-full text-sm font-medium transition",
            page === currentPage
              ? "bg-black text-white"
              : "border hover:bg-black hover:text-white",
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
