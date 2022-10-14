import React from 'react';

import configStyles from './config-styles.js';
import Carousel from './Carousel.js';
import Frame from './Frame.js';
import Nav from './Nav.js';
import Slide from './Slide.js';

export default class GalleryApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.state = {
      showIndex: 0,
      numSlides: 5
    };
  }

  handleClickPrevious() {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    });
  }

  handleClickNext() {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    });
  }

  renderNav() {
    return (
      <Nav
        onPrevious={this.handleClickPrevious}
        hasPrevious={this.state.showIndex > 0}
        onNext={this.handleClickNext}
        hasNext={this.state.showIndex < this.state.numSlides - 1}
      />
    );
  }

  render() {
    return (
      <>
        <h1 style={{textAlign:'center', marginTop:'50px', fontFamily: 'Avenir, "Helvetica Neue", Helvetica, Arial'}}>Salman Alfarizi</h1>
        <Frame>
          <Carousel
            showIndex={this.state.showIndex}
            nav={this.renderNav()}
            width={configStyles.imageWidth}
          >
            <Slide image={require('./images/1.jpg')} title="One Punch Man">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            </Slide>
            <Slide
              image={require('./images/2.jpg')}
              title="Naruto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            </Slide>
            <Slide
              image={require('./images/3.jpg')}
              title="DR Stone"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            </Slide>
            <Slide
              image={require('./images/4.jpg')}
              title="Asta"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            </Slide>
            <Slide
              image={require('./images/5.jpg')}
              title="Jujutsu Kaisen"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ultricies, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
              aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            </Slide>
          </Carousel>
        </Frame>
      </>
    );
  }
}
