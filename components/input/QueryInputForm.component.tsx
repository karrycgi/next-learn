import { RedNoticeQuery, SexId, searchRedNotice } from "next-learn-red-notice-api";
import React from "react";
import styles from "../../styles/UserInput.module.css"


interface State  {
}

interface Props {
    value: UserInputQuery,
    onChange: (value: RedNoticeQuery) => void
}

interface Evnt {
    target: {
        value: any
        name: string
    }
}
type noSex = "N"
type SexIdForInterface = SexId | noSex

// um  geschlechter diskriminierung zu vermeiden wird die sexid erweitert mit "N" für nicht angegeben
// damit wird die Vorauswahl von keinem radio button ermöglicht 
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

export default class QueryInputForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

  
    }

    oncg: (e: Evnt) => void = (e: Evnt) => {
        this.props.onChange({
            ...this.props.value,
            sexId: this.props.value.sexId as SexId,
            [e.target.name] : e.target.value
        })
    }





    render: () => JSX.Element = () => {
        return <div>
            <h2> Suchen Sie einen Verbrecher nach Details: </h2>            
            
                <div className={styles.div}>
                    <div>
                        <label htmlFor='forename'> Vorname </label>
                        <input type="text" name="forename" value={this.props.value.forename} onChange={this.oncg} />
                    </div>
                    <div>
                        <label htmlFor='name'> Nachname </label>
                        <input type="text" name="name" value={this.props.value.name} onChange={this.oncg} />
                    </div>
                    <div>
                        <label htmlFor='Nationalität'> Nationalität </label>
                        <input type="text" name="nationality" value={this.props.value.nationality} onChange={this.oncg} />
                    </div>
                    <div>
                        <label htmlFor='Mindestalter'> Mindestalter </label>
                        <input type="number" name="ageMin" value={this.props.value.ageMin} onChange={this.oncg} />
                    </div>
                    <div>
                        <label htmlFor='Maximales Alter'> Maximales Alter </label>
                        <input type="number" name="ageMax" value={this.props.value.ageMax} onChange={this.oncg} />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="männlich">Männlich</label>
                            <input type="radio" id="männlich" name="sexId" value="M" checked={this.props.value.sexId === "M"} onChange={this.oncg} />
                            <label htmlFor="weiblich">Weiblich</label>
                            <input type="radio" id="weiblich" name="sexId" value="F" checked={this.props.value.sexId === "F"} onChange={this.oncg} />
                            <label htmlFor="divers">Divers</label>
                            <input type="radio" id="divers" name="sexId" value="U" checked={this.props.value.sexId === "U"} onChange={this.oncg} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='Land Strafverfolgung'> Land Strafverfolgung </label>
                        <input type="text" name="arrestWarrantCountryId" value={this.props.value.arrestWarrantCountryId} onChange={this.oncg} />
                    </div>
                    <div>
                        <label htmlFor='Seite'> Seite </label>
                        <input type="number" name="page" value={this.props.value.page} onChange={this.oncg} />
                    </div>
                    <div>
                        <label htmlFor='Anzahl Ergebnisse pro Seite'> Anzahl Ergebnisse pro Seite </label>
                        <input type="number" name="resultPerPage" value={this.props.value.resultPerPage} onChange={this.oncg} />
                    </div>
                </div>


        </div>
    }
}

