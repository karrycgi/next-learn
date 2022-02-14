import React from "react";
import SmallForm from "../input/SmallForm.component";

interface Props{

}

interface State{
    detail: string
    button1?: any
}

interface Evnt {
    target: {
        value: any
        name: string
    }
}

export default class Button extends React.Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            detail : "wafs"
        }
    }

    buttonCallback : (event: any) => void = (event :Evnt ) => {
        this.setState({
            ...this.state,
            [event.target.name] :  this.state.button1 ? this.state.button1  + event.target.value : "" + event.target.value
        })
    }

    useFormValue : (value:string) => void = (value) =>{
        this.setState({
            ...this.state,
            button1 : this.state.button1 + value
        })
    } 

    render: () => JSX.Element = () => {
        return <div>
            <button name="button1" value={"Christian"} onClick={this.buttonCallback}>Click me</button>
            <p>{this.state.detail}</p>
            <p>{this.state.button1 && this.state.button1}</p>
            <SmallForm callback={this.useFormValue}></SmallForm>
        </div>
    }
}