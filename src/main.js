import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';



class App extends React.Component{

    render(){
        return(
            <div>
              <Header appTitle="React App"/>
              <Navbar />
              <Footer /> 
            </div>   
        )
    }
}
ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));