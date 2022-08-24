import React from 'react';
import {Pagination} from "@mui/material";

const Paginator = (props) => {
	
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	
	return (
		<div>
			<Pagination count={pagesCount} page={props.currentPage} variant="outlined" onChange={(event, page) => {
				props.onPageChanched(page)
			}}/>
		</div>
		
	)
}

export default Paginator;