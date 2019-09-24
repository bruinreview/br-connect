import React, { Component } from 'react';
import './Header.css';



export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="flex justify-start container">
                <div className="flex vertical-text">
                <div className="line-bottom"></div>
                    <div className="no-underline ph3 nav" to="/connect">connect</div>
                    <div className="no-underline ph3 nav" to="/shop">shop</div>
                    <div className="no-underline ph3 nav" to="/print">print</div>
                    <div className="no-underline ph3 nav" to="/">home</div>
                    <div className="line-top"></div>
                </div>
            </div>

        )
    }

}
