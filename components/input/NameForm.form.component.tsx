import React, { ChangeEvent } from "react";

export interface NameValues {
    name: string,
    forname: string
}

interface Props {
    value: NameValues,
    onChange: (value: NameValues) => void
}

interface State { }

export default class NameForm extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(evnt: ChangeEvent<HTMLInputElement>): void {
        this.props.onChange({
            ...this.props.value,
            [evnt.target.name]: evnt.target.value
        });
    }

    render(): JSX.Element {
        return <div>
            <div>Name: <input name="name" type="text" value={this.props.value.name} onChange={this.onChange} /></div>
            <div>Vorname: <input name="forname" type="text" value={this.props.value.forname} onChange={this.onChange} /></div>
        </div>
    }
}