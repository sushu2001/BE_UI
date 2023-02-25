import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import data from "./Data.json";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Main/>
      <SearchBar placeholder="Search Here..." data={data}/>
    </div>
  );
}

export default App;