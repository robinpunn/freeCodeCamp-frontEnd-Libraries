import React from 'react'
import twit2 from './twit2.svg'
import './Quote.css'
import axios from "axios"

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            author: '',
            color: "",
        };
            this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        const options = {
          method: 'GET',
          url: 'https://quotes15.p.rapidapi.com/quotes/random/',
          headers: {
            'X-RapidAPI-Key':X_RAPIDAPI_KEY,
            'X-RapidAPI-Host':X_RAPIDAPI_HOST
          }
        };
        axios.request(options).then(response => {
          console.log(response.data.content,response.data.originator.name);
          this.setState({
            text: response.data.content,
            author: response.data.originator.name
          });
        }).catch(error => {
          console.error(error);
        });
        this.setState({color})
      }

    handleClick() {
        this.setState({ text: '', author: '' });
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            headers: {
                'X-RapidAPI-Key':"1ba66963ddmsh7bd36ee89016b08p179f8cjsn0bb9000a2a2c",
                'X-RapidAPI-Host':"quotes15.p.rapidapi.com"
            }
        };
        axios.request(options).then(response => {
            console.log(response.data.content,response.data.originator.name);
            this.setState({
                text: response.data.content,
                author: response.data.originator.name
            });
        }).catch(error => {
            console.error(error);
        });
        this.setState({color})
    }

    render() {
        document.body.style.backgroundColor = this.state.color;
        return (
        <div style={{ position:'relative', height: '100%'}}>
            <div id="quote-box">
                <div className='fade-in'>
                    <h2 id="text" style={{color:`${this.state.color}`}}>{this.state.text}</h2>
                    <p id="author" style={{color:`${this.state.color}`}}>{this.state.author}</p>
                </div>
            <div id="button-box">
                <a id="tweet-quote" rel="noreferrer" target="_blank" href={`twitter.com/intent/tweet?text="${this.state.text}" - ${this.state.author}`}>
                    <img src={twit2} style={{backgroundColor:`${this.state.color}`, border:`0.3rem solid ${this.state.color}`}} alt='twitter logo'/>
                </a>
                <button id="new-quote" style={{backgroundColor:`${this.state.color}`,color:'#fff',border:`0.1rem solid ${this.state.color}`}} onClick={this.handleClick}>New Quote</button>
            </div>
            </div>
        </div>
        );
    }
};

export default Quote;