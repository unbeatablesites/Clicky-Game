import React, { Component } from 'react';
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";
import "./App.css";

class App extends Component {

  state = {
    images,
    clickedImages: [],
    score: 0
  };

  setClicked = event => {
    const allImages = event.target.alt;
    const imagesAlreadyClicked = this.state.clickedImages.indexOf(allImages) > -1;
    console.log(this.state.clickedImages);
    console.log(this.state.id);

    if (imagesAlreadyClicked) {
      this.setState({
        images: this.state.images.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImages: [],
        score: 0
      });
      alert("You lose. Play again?");

    } else {
      this.setState({
        images: this.state.images.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImages: this.state.clickedImages.concat(
          allImages,
        ),
        score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("You win!");
            this.setState({
              fish: this.state.images.sort(function(a, b) {
                return 0.5 - Math.random()
              }),
              clickedImages: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}/>
        <Jumbotron />
        {/* {this.images.map(image => ( */}
          {this.state.images.map(image => (
          <Image
            id={image.id}
            key={image.id}
            image={image.image}
            setClicked={this.setClicked}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;