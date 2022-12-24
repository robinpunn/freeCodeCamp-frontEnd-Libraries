import React from 'react';
import twit from './twit.png'
import './Quote.css'

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            tweet: ""
        };
            this.handleClick = this.handleClick.bind(this)
            this.handleTweet = this.handleTweet.bind(this)
    }
    handleClick() {
        this.setState({
            text: "You clicked!"
        });
    }
    handleTweet() {
        this.setState({
            tweet: "It worked!"
        });
    }
    render() {
        return (
        <div style={{ position:'relative', height: '100%'}}>
            <div id="quote-box">
                <h2 id="text">{this.state.text}</h2>
                <p id="author">Dummy</p>
            <div id="button-box">
                <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">
                    <img src={twit} alt='twitter logo'/>
                </a>
                <button id="new-quote" onClick={this.handleClick}>New Quote</button>
            </div>
            </div>
        </div>
        );
    }
};

export default Quote;