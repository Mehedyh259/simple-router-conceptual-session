import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct";

const Home = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/name.json")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  console.log(name);

  return (
    <div>
      <Banner />

      <div className="my-8">
        <h1 className="text-3xl text-center py-5">Out Featured Foods</h1>

        {/* foods sections */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {showAll
            ? products.map((product) => <SingleProduct product={product} />)
            : products
                .slice(0, 4)
                .map((product) => <SingleProduct product={product} />)}
        </div>
        <div className="text-center">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="btn btn-sm btn-secondary my-4"
            >
              Show All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
