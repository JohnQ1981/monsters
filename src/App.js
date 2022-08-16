import "./App.css";
import { render } from "@testing-library/react";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
        <header className="App-header">
              <div>
            <SearchBox
              onChangeHandler={onSearchChange}
              placeholder="search monsters"
              className="search box"
            />
          </div>
          <div>
            {" "}
            <CardList monsters={filteredMonsters} />
          </div>

          {/* <div> {filteredMonsters.map((monster)=>{
            return(
              <div key ={monster.id} >
                <h1>{monster.name}</h1>
              </div>
            );
           }
           )}</div> */}

          <button
            onClick={() => {
              this.setState({ name: "Salih" });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
