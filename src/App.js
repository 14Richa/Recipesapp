import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';

var cors = require('cors')

// app.use(cors())

const App = () => {

  const APP_ID = 'f73c8a5f';
  const APP_KEY = '474e5b415ac35fceceafbb47cf981352';
    
  useEffect( () => {

    getRecipes();

  

  }, []);

  const getRecipes = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch( proxyurl + url );
    console.log(response)
    const data = await response.json();
    console.log(data);
      
  
  }


  

  return(
    <div className= "App">
      <form className= "search-form">
      <input className = "search-bar" type = "text"/>
      <button 
        className = "search-button" 
        type = "submit"> Search
      </button>
      </form>

    </div>

  );

};

export default App;
