"use client";

import type * as React from "react";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationUI,
} from "@/shared/ui/pagination";
import { getPages } from "../utils/pagination.helper";

type MoviesPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<MoviesPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <PaginationUI className="my-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)} />
        </PaginationItem>

        {getPages({ currentPage, totalPages }).map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem
              key={`ellipsis-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
            >
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onPageChange(page as number)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => totalPages !== currentPage && onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationUI>
  );
};
