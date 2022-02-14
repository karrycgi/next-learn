
interface SmallFormProps{
    callback : (value: string) => void
}



const SmallForm : (props:SmallFormProps) => JSX.Element = (props) => {
    function callCallback(evt : any){
        console.log(evt)
        props.callback(evt.target.value)
    }
    return <div>
        <input onChange={callCallback} ></input>
    </div>
}

export default SmallForm