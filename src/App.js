import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
 
  // login feature
  
  const [ { user } , dispatch] = useStateValue();
  return (
    //WHENEVER WE LOGIN WE PUSH THE USER INTO DATA LAYER
   
    //BEM naminng convention using 'app' instead of 'App'
  <div className="app">
      {/* if there is no user then login else render the page */}
      {!user ? (
        <Login />
      ) : ( 
      <>
       {/* DATA LAYER (REACT CONTEXT API)*/}
        <Header />
        
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
    )}
  </div>
  );

}

export default App;
