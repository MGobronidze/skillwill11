const Book = (props) =>{

    return (
        <div className="book">
            {/* header */}
            <h1 className="book-title"> {props.name}</h1>
            {/* image */}
            <img src={props.image} alt={props.name} className="img-container"/>
            {/* short description */}
            <p>{props.description}</p>
            {/* character names */}
            {props.character.map((char) => <div>{char}</div>)}
            {/* button - function - console info about book*/}
            <button className="btn">Print Info</button>
        </div>
    )    
}
    

export default Book