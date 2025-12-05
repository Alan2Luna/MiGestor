import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


interface Props {
  totalPages: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

export function PaginateUserList({ totalPages, currentPage, handlePagination }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const hideNext = (currentPage + 1) > totalPages;
  const hidePrevious = (currentPage - 1) < 1;

  return(
    <Pagination>
      <PaginationContent>
        <PaginationItem hidden={hidePrevious} onClick={() => handlePagination(-1)} className="cursor-pointer">
           <PaginationPrevious/>
         </PaginationItem>
        {
          pages.map((page, index) => (
            <PaginationItem key={index}>
              <PaginationLink isActive={currentPage === page} className="border-primary">
                { page }
              </PaginationLink>
            </PaginationItem>
          ))
        }
        <PaginationItem hidden={hideNext} onClick={() => handlePagination(+1)} className="cursor-pointer">
           <PaginationNext/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
