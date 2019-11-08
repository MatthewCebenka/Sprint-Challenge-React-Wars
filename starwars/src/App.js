import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from './components/Card'
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  const url = "https://swapi.co/api/people/";
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
      <h1> React Wars </h1>{" "}
      <section>
        {" "}
        {data.map((character, index) => {
          return (
            <character className="person" key={index}>
              <Card key={index} name={character.name} />{" "}
              <Card
                key={index}
                name={character.name}
                age={character.birth_year}
              />{" "}
            </character>
          );
        })}{" "}
      </section>{" "}
    </div>
  );
};

export default App;
