function Field(props){
    return(
        <div className="field">
            <label>{props.name}</label>
            <input autoComplete="off" type={props.type} value={props.value} onChange={props.onChange}/>
        </div>
    )
}
export default Field