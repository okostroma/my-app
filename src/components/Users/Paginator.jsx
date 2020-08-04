import React, {useState} from "react";
import classes from './Paginator.module.css'


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;


    return <div className={classes.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}> &lArr; </button>}

        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
            return (<span key={p} className={`${props.currentPage === p && classes.selectedPage} ${classes.page}`}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p} {p !== rightPortionPageNumber && <b>&sdot;</b>} </span>)
        })

        }


        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}> &rArr; </button>}

    </div>

}


export default Paginator;

