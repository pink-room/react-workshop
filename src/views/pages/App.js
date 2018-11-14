import React from 'react';
import logo from 'views/assets/images/logo.svg';
import 'views/assets/stylesheets/App.css';
import {ImageWrapper} from 'views/components/ImageWrapper';
import {Image} from 'views/components/Image';
import {getPopularImages} from 'core/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add state
      images: [],
      selectedImage: null,
      upperText: '',
      lowerText: '',
    };
  }

  componentDidMount() {
    // Add logic
    getPopularImages().then(response =>
      this.setState({images: response.data.memes}),
    );
  }

  setUpperText = e => {
    this.setState({upperText: e.target.value});
  };

  setLowerText = e => {
    this.setState({lowerText: e.target.value});
  };

  onSelect = (image, e) => {
    this.setState({selectedImage: image});
  };

  onClick = e => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Meme it! </h1>
        </header>

        {this.state.selectedImage && (
          <div className="App-generated-meme">
            <div className="App-inputs">
              <input type="text" onChange={this.setUpperText} />
              <input type="text" onChange={this.setLowerText} />
            </div>

            <div className="App-selected">
              <h2> {this.state.upperText} </h2>
              <Image image={this.state.selectedImage} />
              <h2> {this.state.lowerText} </h2>
            </div>
          </div>
        )}

        <ImageWrapper
          passOnClick={this.onSelect}
          images={this.state.images}
          selectedImage={
            this.state.selectedImage && this.state.selectedImage.url
          }
        />
      </div>
    );
  }
}

export default App;
