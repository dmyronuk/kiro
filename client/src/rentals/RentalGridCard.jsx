import React from "react";
import { Link } from "react-router-dom";

const RentalGridCard = (props) => {
return(
    <Link to={"/rentals/" + props.id}>
      <div className="listing-grid-card">
        <div className="listing-grid-photo-container">
          { props.data.photos ?
            <img alt="Rental Photo" src={props.data.photos[0]} />
            : <img alt="No Image Available" src="/images/no-image.jpg" />
          }
        </div>
        <div className="listing-grid-info">
          <div className="listing-grid-address">{props.data.street}, {props.data.city}</div>
          <div>{props.data.bedrooms} Bedrooms | {props.data.bathrooms} Bathrooms | ${props.data.price}</div>
        </div>
      </div>
    </Link>
  )
};

export default RentalGridCard
