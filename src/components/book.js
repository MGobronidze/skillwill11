const Book = ({name, image, description, action, character}) =>{

    return (
        <div className="book">
            {/* header */}
            <h1 className="book-title"> {name}</h1>
            {/* image */}
            <img src={image} alt={name} className="img-container"/>
            {/* short description */}
            <p>{description}</p>
            {/* character names */}
            {character.map((char) => <div>{char}</div>)}
            {/* button - function - console info about book*/}
            <button onClick={()=> action(name, character )} className="btn">Print Info</button>
        </div>
    )    
}
    

export default Book