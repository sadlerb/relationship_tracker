import './App.css';
import CardList from './components/cardlist/card-list.component';

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
  return (
    <div>
      <div>
        <h1>Relationships</h1>
        <div>Add Relationship Button</div>
        <div>Search Bar</div>
        <CardList persons={persons}/>
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
