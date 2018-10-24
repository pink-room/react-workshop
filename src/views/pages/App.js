import React from 'react';
import logo from 'views/assets/images/logo.svg'
import 'views/assets/stylesheets/App.css';

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
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Meme it! </h1>
        </header>

        <div className="App-inputs" />

      </div>
    );
  }
}

export default App;
