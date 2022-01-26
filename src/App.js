import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };

        console.log('Component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio})
    }

    render() {
       return (
           <div>
               <h1>Hello!</h1>
               <p>My name is Justin. I'm a Data Scientist.</p>
               <p>I'm always looking forward to working on meaningful projects.</p>
               {
                   this.state.displayBio ? (
                    <div>
                        <p>I live in Centralia, and I code pretty much everyday</p>
                        <p>My favorite language is Python and I think machine learning models are amazing.</p>
                        <p>Besides coding, I love music and watching football.</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
               }
           </div>
       ) 
    }
}

export default App;
