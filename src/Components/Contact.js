import React, {Component} from 'react';
import {Fade} from 'react-reveal';
import './About.css';
import ButtonList from './ButtonList';

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            apply: false
        }
    }

    render(props){
        return(
            <Fade>
            <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
<iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shruNSySUuCOZMFae?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="1035" style={{height:'500px', overflow:'auto',background: 'transparent', border: '1px solid #ccc'}}></iframe>
            </Fade>
        )
    }
}
