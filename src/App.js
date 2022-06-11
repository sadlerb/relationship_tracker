import './App.css';
import CardList from './components/cardlist/card-list.component';
import { useState } from 'react';
import SearchBox from './components/search-box/search-box.components';

const persons = [
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


function App() {

  // Initialize search field
  const [searchField,setSearchField] = useState('')

  // Filter persons based on full name, lower case and no spaces
  const filteredPeople =persons.filter((person) =>{
    const fullName = person.firstName + person.lastName
    return fullName.toLowerCase().includes(searchField.replace(/\s/g, ''))
  })

// When user types in search box update state and return searchField
  function onSearchChange(event){
    const value = event.target.value.toLowerCase()
    setSearchField(value)
    return(searchField)
  }

  return (
    <div>
      <div>
        <h1>Relationships</h1>
        <div>Add Relationship Button</div>
        <SearchBox onSearchChangeHandeler={onSearchChange} placeholder='Search'/>
        <CardList persons={filteredPeople}/>
      </div>
      <div>
        Details Section
        <div>
          Person Header
          <div>
            Notes and Reminders
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
