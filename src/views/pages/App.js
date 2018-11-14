import React from 'react';
import logo from 'views/assets/images/logo.svg';
import 'views/assets/stylesheets/App.css';
import {ImageWrapper} from 'views/components/ImageWrapper';
import {getPopularImages} from 'core/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add state
      images: [],
      selectedImage: null,
    };
  }

  componentDidMount() {
    // Add logic
    getPopularImages().then(response =>
      this.setState({images: response.data.memes}),
    );
  }

  setUpperText = e => {};

  setLowerText = e => {};

  onSelect = e => {
    this.setState({selectedImage: e.target.currentSrc});
  };

  onClick = e => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Meme it! </h1>
        </header>

        <div className="App-inputs" />

        <ImageWrapper
          passOnClick={this.onSelect}
          images={this.state.images}
          selectedImage={this.state.selectedImage}
        />
      </div>
    );
  }
}

export default App;
