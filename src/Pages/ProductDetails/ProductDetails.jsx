import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";

const ProductDetails = () => {
  const product = useLoaderData();
  const { id, name, price, rating, image, food_type, description } = product;

  const [ordered,setOrdered] = useState(false)

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("orders"));
    if(storedData){
        const exist = storedData.find(item => item.id == id);
        if(exist){
            setOrdered(true)
        }

    }
  },[product])


  const handleOrder = () => {
    const storedData = JSON.parse(localStorage.getItem("orders"));


    if(storedData){
            localStorage.setItem("orders",JSON.stringify([...storedData,product]))

    }else{
        localStorage.setItem("orders",JSON.stringify([product]))
    }
    setOrdered(true)

  }

  return (
    <div>
{/* <Banner bannerTitle={name}/> */}

      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/2 h-[400px]">
          <img className="h-full w-full" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{food_type}</div>
          </h2>
          <p className="text-md">Price: ${price}</p>
          <p className="text-md">Rating: {rating}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button disabled={ordered} onClick={handleOrder} className="btn btn-primary">
            {
                ordered ?
                "Already Ordered"
                :
                "Order This Food"
                }

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
