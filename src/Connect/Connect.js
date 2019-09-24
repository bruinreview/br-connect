import React, { Component } from 'react';
import Header from '../Header';
import './Connect.css';
import About from '../Components/About';
import Contact from '../Components/Contact';
import GetInvolved from '../Components/GetInvolved';
import Support from '../Components/Support';


export default class Print extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
          <div className="flex justify-center home">
              <Header />
              <div className="main flex justify-center">
                <div className="left-col">
                  <About />
                  <GetInvolved />
                </div>
                <div className="right-col">
                  <Contact />
                </div>
              </div>
          </div>
        )
    }

}
