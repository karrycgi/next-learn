import React from "react";

interface State {
    count: number
}

interface Props {
    stepSize?: number,
    onChange: (value: any) => void
}

export default class NumPicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            count: 0
        };

        this.add = this.add.bind(this);
    }

    add(num: number): void {
        this.setState(
            { count: this.state.count + num },
            () => {
                this.props.onChange(this.state.count);
            }
        );
    }

    render(): JSX.Element {
        return <div>
            <button onClick={() => this.add((this.props.stepSize || 1) * (-1))}>-</button>
            <span className={this.state.count%2 === 1?"value odd":"value"}>{this.state.count}</span>
            <button onClick={() => this.add(this.props.stepSize || 1)}>+</button>
        </div>
    }
}