import RedNotice, { RedNoticeLinks, RedNoticeNotices, RedNoticeQuery, RedNoticeResult } from "next-learn-red-notice-api/build/lib/RedNotice.all";

//hard coded placeholder
export default class RedNoticeClass implements RedNoticeResult {

    total: number;
    query: RedNoticeQuery;
    _embedded: RedNoticeNotices;
    _links: RedNoticeLinks;
    isUpdated: boolean;

    constructor() {
        this.total = 0
        this.query = { page: 1, resultPerPage: 2 }
        this._embedded = {
            notices : []
        }
        this._links = {}
        this.isUpdated = false
    }



}