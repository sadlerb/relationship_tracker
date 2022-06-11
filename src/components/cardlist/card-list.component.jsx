import Card from "../card/card.component";


function CardList(props) {
    const {persons} = props 
    return(
        <div className="card-list-container">
           {persons.map((person) =>{
              return <Card person={person} key={person.id}/>
           })}
        </div>
    )
}

export default CardList