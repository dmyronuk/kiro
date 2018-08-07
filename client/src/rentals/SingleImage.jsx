import React, { Component } from "react";

class SingleImage extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.image !== this.props.image
  }

  render() {
    return (
      <div className="photo-grid-card">
        <div className="photo-grid-photo-container">
          <img src={this.props.image} alt="img" />
        </div>
        <div className="photo-info">
          {this.props.index === 0 &&
            <div>Main Picture</div> }
          <button className="picture-remove" type="submit" onClick={() => this.props.handleDeleteImage(this.props.image)}>Remove</button><br/>
        </div>
      </div>
    )
  }
}

export default SingleImage