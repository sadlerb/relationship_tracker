import './card.styles.scss'

function Card({person}) {
    const {firstName,lastName,imgUrl} = person
    return(
        <div className='card-container'>
            <img alt='placeholder/profile' src={imgUrl}/ >
            <h2> {firstName} {lastName}</h2>
        </div>
    )
    
}

export default Card