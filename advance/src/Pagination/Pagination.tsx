import React, { useState } from "react";

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  children: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

export function Pagination<T>({
  items,
  itemsPerPage = 10,
  children,
  keyExtractor,
}: PaginationProps<T>) {
  const [page, setPage] = useState(0);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => goToPage(i)}>
          {i + 1}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div>
        {paginatedItems.map((item) => {
          return (
            <React.Fragment key={keyExtractor(item)}>
              {children(item)}
            </React.Fragment>
          );
        })}
      </div>
      <div>{renderPageNumbers()}</div>
    </div>
  );
}

export default function PaginationDemo() {
  const items = Array(100)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
    }));

  return (
    <Pagination
      items={items}
      keyExtractor={(item) => item.id}
      itemsPerPage={10}
    >
      {(item) => {
        return <div>{item.name}</div>;
      }}
    </Pagination>
  );
}
