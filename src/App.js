import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>
  this.setState(
    ()=>{
     return {monsters :users};
    }
  
  )
  );
  
  
}

onSearchChange = (event)=>{
              
  const searchField =event.target.value.toLocaleLowerCase();
  
    this.setState (()=>{
      return {searchField};
     });

}

  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    




    return (
      <div className="App">
        <header className="App-header">
         
        
            <h2>Hello {this.state.name}</h2>
            <h2>Hi, I work at {this.state.company}</h2>
            <h2>Monsters Search</h2>

            

            
<div><SearchBox onChangeHandler ={onSearchChange} placeholder ="search monsters" className ='search box'/></div>
<div> <CardList monsters ={filteredMonsters}/></div>
           
           {/* <div> {filteredMonsters.map((monster)=>{
            return(
              <div key ={monster.id} >
                <h1>{monster.name}</h1>
              </div>
            );
           }
           )}</div> */}

         <button onClick ={()=>{
          this.setState({name: "Salih"});
         }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
