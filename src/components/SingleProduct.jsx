import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({product}) => {

    const {id,name,image,food_type,description} = product



  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/2 h-[320px]">
        <img
        className="h-full w-full"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{food_type}</div>
        </h2>
        <p>{description.slice(0,50)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${id}`} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
