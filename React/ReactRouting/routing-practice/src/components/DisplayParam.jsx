const DisplayParam = props => {
    return(
        <h1>The {isNaN(props.param) ? "word" : "number"} is: {props.param}</h1>
    )
}

export default DisplayParam;