import React from "react";
import Header from './components/Header'
import Main from './components/Main'
import "./App.css";



const App = () => {

  return (
    <div class="text-gray-500 font-body">
      <div class="md:grid grid-cols-5">
        <Header />
        <Main />
      </div>
    </div>
  )
};

export default App;
