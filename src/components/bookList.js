// rafce
import React from 'react'
import Book from "./book";
import image1984 from "../assets/1984.jpg";
import imageAF from "../assets/animal-farm.jpg";
import imageIshmael from "../assets/ishmael.jpg";
import imageTheGOfJC from "../assets/the-gospel-of-jesus-christ.jpg";  

const data =[
  {
    id:1,
    name: "1984", 
    description: "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's live",
    character: ["Winston Smith"], 
    image: image1984
},
  {
    id:2,
    name: "Animal Farm",
    description: "Animal Farm is a beast fable, in the form of a satirical allegorical novella, by George Orwell, first published in England on 17 August 1945.",
    character:["Napoleon","Snow Ball","Old Major","MR. Jones"],
    image: imageAF
  },
  {
    id:3,
    name:"Ishmael", 
    description:"Ishmael is a 1992 philosophical novel by Daniel Quinn. The novel examines the hidden cultural biases driving modern civilization and explores themes of ethics, sustainability, and global catastrophe. Largely framed as a Socratic conversation between two characters,[1] Ishmael aims to expose that several widely accepted assumptions of modern society, such as human supremacy, are actually cultural myths that produce catastrophic consequences for humankind and the environment. The novel was awarded the $500,000 Turner Tomorrow Fellowship Award in 1991, a year before its formal publication.",
    character: ["Ishmael","The Narrator"],
    image: imageIshmael
  },
  {
    id:4,
    name:"The Gospel of Jesus Christ", 
    description:"The Gospel According to Jesus Christ (original title: O Evangelho Segundo Jesus Cristo, 1991) is a novel by the Portuguese author José Saramago. It is a fictional re-telling of Jesus Christ's life, depicting him as a flawed, humanised character with passions and doubts. The novel proved controversial,[1] especially to representatives of the Roman Catholic Church, with the Vatican newspaper L'Osservatore Romano accusing Saramago of having a substantially anti-religious vision.[2] It was praised by other critics as a deeply philosophical, provocative and compelling work", 
    character: ["Mary", "Joseph"], 
    image: imageTheGOfJC
  }
]

const BookList = () => {
  function action(name, character){
    alert(`Book name is ${name}, Characters are: ${character} ` )
  }
  return (
    <div>
      {data.map((book) => <Book key={book.id} name={book.name} description ={book.description} character ={book.character} image ={book.image} action={action}/>)}
    </div>
  )
}

export default BookList