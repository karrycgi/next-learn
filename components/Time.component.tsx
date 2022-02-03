import React from "react";

interface Props {}
interface State {
    date: Date,
    intervalId?: NodeJS.Timer
}

export default class Time extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);

        this.state = {
            date: new Date()
        }

        this.updateTime = this.updateTime.bind(this);
    }

    updateTime(): void {
        this.setState({date: new Date()})
    }

    componentDidMount(): void {
        this.setState({
            intervalId: setInterval(this.updateTime, 1000)
        })
    }

    componentWillUnmount(): void {
        this.state.intervalId && clearInterval(this.state.intervalId);
    }

    render():JSX.Element {
        return <span>{`${this.state.date.getHours()}:${this.state.date.getMinutes()}:${this.state.date.getSeconds()}`}</span>
    }
} 