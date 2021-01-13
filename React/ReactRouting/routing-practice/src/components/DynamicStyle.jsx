const DynamicStyle = props =>{
    const style = {
        background: props.background,
        color: props.color
    }
    
    return(
        <h1 style={style}>The {isNaN(props.param) ? "word" : "number"} is {props.param}</h1>
    )
}

export default DynamicStyle;