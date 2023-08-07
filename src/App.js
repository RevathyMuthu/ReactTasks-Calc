
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from 'react'
import Calc from "./Calc"


function App() {

  return (
    <div className="App">
      <Header title="Calculator" />
      <Calc />
      <Footer />
    </div>
  );
}

export default App;
