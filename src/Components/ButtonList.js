import React, {Component} from 'react';
import './Button.css';

export default class ButtonList extends Component{
    constructor(props){
        super(props);
        this.state={
          index: 0,
          artist: false,
          developer: false
        };
        this.selectBtn= this.selectBtn.bind(this);
    }
    selectBtn = (i) => this.setState({ index: i })

    render(props){
        return(
            <div className="button-list flex" >
              <Button label="writer" index={1} onClick={this.selectBtn} active={this.state.index===1}/>
              <Button label="artist" index={2} onClick={this.selectBtn} active={this.state.index===2}/>
              <Button label="developer" index={3} onClick={this.selectBtn} active={this.state.index===3}/>
              <Button label="sponsor" index={4} onClick={this.selectBtn} active={this.state.index===4}/>
              <Button label="other" index={5} onClick={this.selectBtn} active={this.state.index===5}/>
            </div>
        )
    }
}

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
        };
        this.selectBtn= this.selectBtn.bind(this);

    }
    selectBtn = () => this.props.onClick(this.props.index)

    render(props){
        return(
            <button className={this.props.active ? "button activated": "button"} id={this.props.label} onClick={this.selectBtn}>
              {this.props.label}
            </button>
        )
    }
}
