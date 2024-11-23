
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MealsInCategory from './components/MealsInCategory';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './store/appStore';




function App() {

  const [user, setUser] = useState('');

  useEffect(()=>{
    setUser('Ramanuj Das');
  },[])

  return (
    <Provider store={appStore}>
    <div className="App">
    <UserContext.Provider value={{user:user,setUser}}>
    <header className="header">
      <Header/>
    </header>
      <Container className='body'>
        <Outlet/>
      </Container>
      <Footer/>
      </UserContext.Provider>
    </div>
    </Provider>
  );

  

}



export default App;
