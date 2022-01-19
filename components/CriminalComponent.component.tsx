interface CriminalComponentInterface {
    firstname: string,
    lastname: string,
    children: any
}
const CriminalComponent = (props: CriminalComponentInterface) : JSX.Element => {
    return <div>
        <h1>{props.lastname}, {props.firstname}</h1>
        <div>{props.children}</div>
    </div>
}

export default CriminalComponent;