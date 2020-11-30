import './App.css';
import './components/styles.css'
import React from 'react';
import './components/styles.css'; 
import Picslist from './components/Picslist';

class App extends React.Component {

render(){
    return (
      <body>
      <div id="load"></div>
      <div className="App" >
      <h1 className="app-header">Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div id="contents">
        <Picslist></Picslist>
      </div>
      <p>@Shir Ben Harush</p>
      </div>
      </body>
    );
    
  }
}
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive'){
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
  }
}

export default App;
