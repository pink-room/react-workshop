import React from 'react';
import logo from 'views/assets/images/logo.svg';
import 'views/assets/stylesheets/App.css';
import {ImageWrapper} from 'views/components/ImageWrapper';
import {Image} from 'views/components/Image';
import {createMeme, getPopularMemes} from 'core/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      selectedImage: null,
      upperText: '',
      lowerText: '',
      createdMeme: null,
    };
  }

  componentDidMount() {
    getPopularMemes().then(response =>
      this.setState({memes: response.data.memes}),
    );
  }

  setUpperText = e => {
    this.setState({upperText: e.target.value});
  };

  setLowerText = e => {
    this.setState({lowerText: e.target.value});
  };

  handleClick = (image, e) => {
    this.setState({selectedImage: image});
  };

  handleSubmit = e => {
    e.preventDefault();
    createMeme(
      this.state.selectedImage.id,
      this.state.upperText,
      this.state.lowerText,
    ).then(response => this.setState({createdMeme: response.data}));
  };

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
              <form onSubmit={this.handleSubmit}>
                <label>
                  Upper Text:
                  <input type="text" onChange={this.setUpperText} />
                </label>
                <label>
                  Lower Text:
                  <input type="text" onChange={this.setLowerText} />
                </label>
                <input type="submit" value="Create Meme" />
              </form>
            </div>

            <div className="App-selected">
              <h2> {this.state.upperText} </h2>
              <h2> {this.state.lowerText} </h2>
              <Image
                image={this.state.selectedImage}
                handleClick={this.handleClick}
              />
            </div>

            {this.state.createdMeme && (
              <div className="App-selected">
                <Image
                  image={this.state.createdMeme}
                  handleClick={this.handleClick}
                />
              </div>
            )}
          </div>
        )}

        <ImageWrapper
          handleClick={this.handleClick}
          images={this.state.memes}
          selectedImageUrl={
            this.state.selectedImage && this.state.selectedImage.url
          }
        />
      </div>
    );
  }
}

export default App;
