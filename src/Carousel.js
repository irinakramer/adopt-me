import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  }

  // arrow func doesn't create new 'this'.
  // when calling handleClick it's going to get 'this' from where is created, NOT called.
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} data-testid="hero" alt="animal" />
        <div className="carousel-smaller">
          {
            images.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                onClick={this.handleIndexClick}
                data-index={index}
                data-testid={`thumbnail${index}`}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Carousel;
