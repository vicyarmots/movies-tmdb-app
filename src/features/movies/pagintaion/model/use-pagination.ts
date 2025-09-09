import { usePathname, useSearchParams } from "next/navigation";
import { getPages } from "../utils/pagination.helper";

export const usePagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const makeHref = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (page === 1) params.delete("page");
    else params.set("page", String(page));
    const qs = params.toString();
    return `${pathname}${qs ? `?${qs}` : ""}`;
  };

  const pages = getPages({ currentPage, totalPages });

  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return { pages, makeHref, prevPage, nextPage };
};
