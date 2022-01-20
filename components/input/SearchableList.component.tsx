import React from "react";

interface Props {
    elements: string[]
}

interface State {
    startWith: string,
    filteredElements: string[]
}

export default class SearchableList extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);

        this.state = {
            startWith: "",
            filteredElements: props.elements
        }
    }

    startWithChange(text:string):void {
        this.setState({
            startWith: text,
            filteredElements: this.props.elements.filter((ele:string)=>ele.toLowerCase().startsWith(text.toLowerCase()))
        });
    }

    render():JSX.Element {
        return <div>
            <div><input value={this.state.startWith} onChange={
                (evnt)=>this.startWithChange(evnt.target.value)
            }/></div>
            <ul>
                {this.state.filteredElements.map((element:string, index:number)=><li key={index}>{element}</li>)}
            </ul>
        </div>
    }
}