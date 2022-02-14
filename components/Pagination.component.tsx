import { RedNoticeQuery } from "next-learn-red-notice-api";
import styles from "../styles/Pagination.module.css"

interface PaginationElements {
    query: RedNoticeQuery,
    pageMax: number
}

export default function Pagination(query: PaginationElements):JSX.Element{
    const userQuery = query.query   
    const page: number = parseInt(userQuery.page)
    const link = refactorQuery(userQuery) 
    const pages: LinkQuery[] = [{...userQuery, link: link,page:page}]
    const noOfIterations = 5 + (page - 5 < 0 ? 5 - page : 0)
    for(let i=1; i <= noOfIterations; i++){
        
        let pageMin = page - i
        if(pageMin > 0){
            const link = "/criminals" + refactorQuery({...userQuery,page: pageMin.toString()})
            pages.unshift({page:page-i,link:link})
        }
        let pageMax = page + i
        if (pageMax < query.pageMax){
            const link = "/criminals"+ refactorQuery({...userQuery,page: pageMax.toString()})
            pages.push({page:page+i,link:link})

        }
    }
    

    return <div className={styles.pagination}>
        {pages.map(p => page === p.page ? <a href={p.link} className={styles.active} > {p.page} </a> : <a href={p.link} > {p.page} </a> )}
    </div>
}

interface LinkQuery  {
    page: number,
    link: string
}

const refactorQuery: (fullQuery: RedNoticeQuery) => string = (fullQuery: RedNoticeQuery) => {
    let cleansedQuery = ""
    let index = 0;
    for (const [key, value] of Object.entries(fullQuery)) {
        if (value) {
            if (index === 0) {
                cleansedQuery = cleansedQuery + "?" + key.toString() + "=" + value
                index++
            } else {
                cleansedQuery = cleansedQuery + "&" + key.toString() + "=" + value
            }
        }
    }
    return cleansedQuery
}