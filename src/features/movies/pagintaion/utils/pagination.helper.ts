export const range = ({ start, end }: { start: number; end: number }) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const getPages = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  if (totalPages <= 7) return range({ start: 1, end: totalPages });

  const pages: (number | "ellipsis")[] = [1];

  if (currentPage > 3) pages.push("ellipsis");

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  pages.push(...range({ start, end }));

  if (currentPage < totalPages - 2) pages.push("ellipsis");
  pages.push(totalPages);

  return pages;
};
