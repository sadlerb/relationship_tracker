import './App.scss';
import CardList from './components/cardlist/card-list.component';
import { useState } from 'react';
import SearchBox from './components/search-box/search-box.components';
import PopUp from './components/popup/popup.components';


const personsArray = [
  {
    firstName:"John",
    lastName:"Brown",
    imgUrl:"https://via.placeholder.com/150/000000/FFFFFF/?text=ProfilePicture",
    id:1
  },
  {
    firstName:"Brendon",
    lastName:"Sadler",
    imgUrl:"https://via.placeholder.com/150/000000/FFFFFF/?text=ProfilePicture",
    id:2
  },
  {
    firstName:"Jody",
    lastName:"Harrison",
    imgUrl:"https://via.placeholder.com/150/000000/FFFFFF/?text=ProfilePicture",
    id:3
  }
]

const newPerson = {
  firstName:"Renee",
  lastName:"AnnaKay",
  imgUrl:"https://via.placeholder.com/150/000000/FFFFFF/?text=ProfilePicture",
  id:4
}




function App() {
  // Handles popup
  const [togglePopupState,changeToggleState] = useState(false)
  function popupHandeler() {
      changeToggleState(!togglePopupState)
  }


  const [persons,setPersons] = useState(personsArray)

  // Initialize search field
  const [searchField,setSearchField] = useState('')

  // Filter persons based on full name, lower case and no spaces
  const filteredPeople =persons.filter((person) =>{
    const fullName = person.firstName + person.lastName
    return fullName.toLowerCase().includes(searchField.replace(/\s/g, ''))
  })

  function addPerson() {
    popupHandeler()
    // handle Adding a new person to the list
   
   
  }
  


  // When user types in search box update state and return searchField
  function onSearchChange(event){
    const value = event.target.value.toLowerCase()
    setSearchField(value)
    return(searchField)
  }

  return (
    <div className='app'>
      <div className={`app-container ${togglePopupState?'inactive':''}`}>
        <div className='relationships-container'>
          <h1>Relationships</h1>
          <button onClick={popupHandeler}>Add Relationship Button</button>
          <SearchBox onSearchChangeHandeler={onSearchChange} placeholder='Search'/>
          <CardList persons={filteredPeople}/>
        </div>
        <div className='details-container'>
          Details Section
          <div className='details-card'>
            Detials Card
            <div>
              Person
              Notes and Reminders
            </div>
          </div>
        </div>
      </div>
      {togglePopupState && <PopUp closeHandeler={popupHandeler} addPersonHandeler={addPerson} />}
    </div>
  );
}

export default App;
