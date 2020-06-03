import React,{useState,useEffect} from 'react';
import './App.css';
import { CardList } from '../src/components/card-list/card-list.component';
import  { SearchBox }  from '../src/components/search-box/search-box.componet';

function App() {

  // const [monsters,setMonsters] =useState([{name:'Frankestein',id:'1'},{name:'Deacula',id:'2'},{name:'Zombie',id:'3'}]);
   
  const [monsters,setMonsters] = useState([]);
  const [searchField,setSearchField] = useState(null);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => setMonsters(users))
  });

const handleChange = (e) => {
  setSearchField(e.target.value) 
};

  const filterMonsters = monsters.filter(monster => monster.name.includes(searchField));
  

  return (
    <div className="App">
      <h1 >Monsters Rolodex</h1>
     <SearchBox placeholder={'search monster'} handleChange={handleChange} />
     <CardList monsters={filterMonsters} />
    </div>

  );
}

export default App;

