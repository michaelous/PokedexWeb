import React from 'react'
import {Button} from "@material-ui/core";
import {PaginationWrapper} from "./styled/pagination/paginationWrapper";

export default function Pagination({gotoPrevPage, gotoNextPage}) {

    return (
        <PaginationWrapper>
            {gotoPrevPage && <Button onClick={gotoPrevPage} variant="contained" color="primary"> Prev </Button>}
            {gotoNextPage && <Button onClick={gotoNextPage} variant="contained" color="primary"> Next </Button>}
        </PaginationWrapper>
    )
}