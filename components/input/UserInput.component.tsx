import { RedNoticeQuery, SexId, searchRedNotice } from "next-learn-red-notice-api";
import React from "react";
import styles from "../../styles/UserInput.module.css"


interface State extends UserInputQuery {

}

interface Props {

}

interface Evnt {
    target: {
        value: any
        name: string
    }
}
type noSex = "N"
type SexIdForInterface = SexId | noSex


interface UserInputQuery {
    forename: string;
    name: string;
    nationality: string;
    ageMax: number;
    ageMin: number;
    sexId: SexIdForInterface;
    arrestWarrantCountryId: string;
    page: number;
    resultPerPage: number;
}



export default class UserInput extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            forename: "",
            name: "",
            nationality: "",
            ageMin: 1,
            ageMax: 100,
            sexId: "N",
            arrestWarrantCountryId: "",
            page: 1,
            resultPerPage: 10,
        }
    }

    textChange: (e: Evnt) => void = (e: Evnt) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    handleSubmit: React.FormEventHandler<HTMLFormElement> = async (evt: any) => {
        evt.preventDefault()
        const genderNotSelected: boolean = this.state.sexId === "N"
        const hasEmptyFields: boolean = Object.values(this.state).some(element => element === "")
        if (hasEmptyFields || genderNotSelected) {
            alert("please fill all fields")
        } else {
            const gender: SexId = this.state.sexId as SexId
            const query: RedNoticeQuery = { ...this.state, sexId: gender }
            const result = await searchRedNotice(query)
            //TO DO:
            //redirect to particular criminal if exists, else show that no criminal with attributes exists
        }
    }

    genderChange: (e: Evnt) => void = (e: Evnt) => {
        const value = e.target.value
        this.setState({
            ...this.state,
            sexId: value
        })
    }

    render: () => JSX.Element = () => {
        return <div>
            <h2> Suchen Sie einen Verbrecher nach Details: </h2>
            <form onSubmit={this.handleSubmit} className={styles.input} >
                <div className={styles.div}>
                <div>
                    <label htmlFor='forename'> Vorname </label>
                    <input type="text" name="forename" value={this.state.forename} onChange={this.textChange} />
                </div>
                <div>
                    <label htmlFor='name'> Nachname </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.textChange} />
                </div>
                <div>
                    <label htmlFor='Nationalität'> Nationalität </label>
                    <input type="text" name="nationality" value={this.state.nationality} onChange={this.textChange} />
                </div>
                <div>
                    <label htmlFor='Mindestalter'> Mindestalter </label>
                    <input type="number" name="ageMin" value={this.state.ageMin} onChange={this.textChange} />
                </div>
                <div>
                    <label htmlFor='Maximales Alter'> Maximales Alter </label>
                    <input type="number" name="ageMax" value={this.state.ageMax} onChange={this.textChange} />
                </div>
                <div>

                    

                    <div>
                        <label htmlFor="männlich">Männlich</label>
                        <input type="radio" id="männlich" name="sexId" value="M" onChange={this.genderChange} />
                        <label htmlFor="weiblich">Weiblich</label>
                        <input type="radio" id="weiblich" name="sexId" value="W" onChange={this.genderChange} />
                        <label htmlFor="divers">Divers</label>
                        <input type="radio" id="divers" name="sexId" value="U" onChange={this.genderChange} />                        
                    </div>


                </div>

                <div>
                    <label htmlFor='Land Strafverfolgung'> Land Strafverfolgung </label>
                    <input type="text" name="arrestWarrantCountryId" value={this.state.arrestWarrantCountryId} onChange={this.textChange} />
                </div>
                <div>
                    <label htmlFor='Seite'> Seite </label>
                    <input type="number" name="page" value={this.state.page} onChange={this.textChange} />
                </div>

                <div>
                    <label htmlFor='Anzahl Ergebnisse pro Seite'> Anzahl Ergebnisse pro Seite </label>
                    <input type="number" name="resultPerPage" value={this.state.resultPerPage} onChange={this.textChange} />
                </div>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    }
}

