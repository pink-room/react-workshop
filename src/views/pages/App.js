import React from 'react';
import 'views/assets/stylesheets/App.css';
import Image from 'views/components/Image';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // Add state
    }
  }

  componentDidMount() {
    // Add logic
  }


  setUpperText = (e) => {}

  setLowerText = (e) => {}

  onSelect = (e) => {}

  onClick = (e) => {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Meme it! </h1>
        </header>

        <div className="App-inputs" >

        </div>

        <button> </button>

        <div className="Images">

        </div>


      </div>
    );
  }
}

export default App;
