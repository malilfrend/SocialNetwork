import React from 'react';
import classes from "./Paginator.module.css";

const Paginator = (props) => {
	
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	
	let pagesArray = []
	
	for (let i = 1; i <= pagesCount; i++) {
		pagesArray.push(i)
	}
	
	return (
		<div>
			{
				pagesArray.map( item => {
					return <span key={Math.random()} className={props.currentPage === item && classes.selected_page}
					             onClick={() => {
						             props.onPageChanched(item)
					             }}
					>
								{item}
							</span>
				})
			}
		</div>
	)
}

export default Paginator;