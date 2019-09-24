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
                  <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                  <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shruNSySUuCOZMFae?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="1035" style={{height:'500px', overflow:'auto',background: 'transparent', border: '1px solid #ccc'}}></iframe>
                </div>
              </div>
          </div>
        )
    }

}
