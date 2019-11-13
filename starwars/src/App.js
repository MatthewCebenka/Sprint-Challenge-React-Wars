import React, {useState, useEffect} from "react";
import axios from 'axios';
import CharacterCard from './components/Card';
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  const url = "https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/";
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => console.log("ERROR"));
  }, []);

  return (
    <div className="App">
      <h1> React Wars </h1>
      <section> 
        {data.map((character, index) => {
          return (
            <character className="person" key={index}>
              <CharacterCard 
                key={index}
                name={character.name}
                age={character.birth_year}
              />
            </character>
          );
        })}
      </section>
    </div>
  );
};

export default App;
