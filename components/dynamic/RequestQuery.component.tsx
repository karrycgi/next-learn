import { RedNoticeQuery } from "next-learn-red-notice-api";
import React from "react";
import UserInput from "../input/QueryInputForm.component";


interface Props {
    onSub: (query: RedNoticeQuery) => void
}
interface State {
    searchFormValue: RedNoticeQuery
}

export default class RequestQuery extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);

        this.state = {
            searchFormValue: {
                ageMin: 1,
                ageMax: 100,
                arrestWarrantCountryId: "",
                forename: "NURLAN",
                name: "BAGHIROV",
                nationality: "",
                page: 1,
                resultPerPage: 5,
                sexId: "M"
            }
        }
    }
    // this.state.searchFormValue.name === "" || this.state.searchFormValue.forename === "" ||
    checkIfAllFieldsFilled: () => boolean = () => {
        const hasEmptyMandatoryFields: boolean = ( this.state.searchFormValue.page === undefined || this.state.searchFormValue.resultPerPage === undefined)
        const hasValidGender: boolean = this.state.searchFormValue.sexId === "M" || this.state.searchFormValue.sexId=== "F" || this.state.searchFormValue.sexId=== "U"
        return (!hasEmptyMandatoryFields && hasValidGender)
    }

    onChange: (query: RedNoticeQuery) => void = (query: RedNoticeQuery) => {
        this.setState({
            searchFormValue : {
                ...query
            }
        })
    }

    onClick: (query: RedNoticeQuery)=> void = (query: RedNoticeQuery) => {
        const isRdy  = this.checkIfAllFieldsFilled();
        if(isRdy){
            this.props.onSub(this.state.searchFormValue)
        }else{
            alert("Bitte alle Pflichtfelder ausfüllen")
        }        
    }

    render(): JSX.Element {
        return <div>
            <UserInput onChange={this.onChange} value={this.state.searchFormValue}></UserInput>
            <button onClick={()=> this.onClick(this.state.searchFormValue) }> Senden </button>
            <div>{JSON.stringify(this.state.searchFormValue)}</div>
        </div>
    }
}