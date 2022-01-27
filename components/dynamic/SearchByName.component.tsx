import React from "react";
import NameForm, { NameValues } from "../input/NameForm.form.component";

interface Props { }
interface State {
    searchFormValue: NameValues
}

export default class SearchByName extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);

        this.state = {
            searchFormValue: {
                name: "",
                forname: ""
            }
        }
    }

    render(): JSX.Element {
        return <div>
            <NameForm
                value={this.state.searchFormValue}
                onChange={(value: NameValues) => { this.setState({ searchFormValue: value }) }}
            />
            <button onClick={()=>console.log(this.state.searchFormValue)}>Senden</button>
            <div>{JSON.stringify(this.state.searchFormValue)}</div>
        </div>
    }
}