import React from 'react';
import logo from 'views/assets/images/logo.svg';
import 'views/assets/stylesheets/App.css';
import {ImageWrapper} from 'views/components/ImageWrapper';
import {getPopularImages} from 'core/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
    };
  }

  componentDidMount() {
    getPopularImages().then(response =>
      this.setState({memes: response.data.memes}),
    );
  }

  setUpperText = e => {};

  setLowerText = e => {};

  onSelect = e => {};

  onClick = e => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Meme it! </h1>
        </header>

        <div className="App-inputs" />

        <ImageWrapper images={this.state.memes} />
      </div>
    );
  }
}

export default App;
