import React from "react";

interface State{
    name: string,
    email: string,
    password: string
}

interface Props{

}

interface Evnt {
    target:{
        value: any
        name: string
    }
}

export default class UserInput extends React.Component<Props,State> {

    constructor(props:Props){
        super(props)
        
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    
    textChange : (e : Evnt) =>void =  (e : Evnt) =>{
        this.setState({...this.state,[e.target.name] : e.target.value})
    }

    render : () => JSX.Element = () => {
        return <div>
            <input type="text" name="name" value={this.state.name} onChange={this.textChange}/>
            <input type="email" name="email" value={this.state.email} onChange={this.textChange}/>
            <input type="password" name="password" value={this.state.password}onChange={this.textChange}/>
            <input type="submit" value="submit" />
        </div>
    }
}