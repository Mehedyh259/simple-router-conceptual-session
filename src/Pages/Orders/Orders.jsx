import React, { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleProduct";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filterOrder, setFilterOrder] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("orders"));
    if (storedData) {
      setOrders(storedData);
      setFilterOrder(storedData);
    }
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    const filterData = orders.filter((item) => item.food_type == value );
    setFilterOrder(filterData)
  }

  return (
    <div>

      <div className="my-3">
        <label htmlFor="">Filter Order: </label>
        <select onChange={handleFilter} className="select select-bordered w-full max-w-xs ml-2">
          <option disabled selected>
            Choose Here
          </option>
          <option value="veg">Veg Orders</option>
          <option value="non-veg">Non-Veg Orders</option>
        </select>
      </div>

      {filterOrder.length > 0 ? (
        filterOrder?.map((product) => (
          <div className="my-4">
            <SingleProduct product={product} />
          </div>
        ))
      ) : (
        <h1 className="text-xl text-center text-red-500">No Order Found</h1>
      )}
    </div>
  );
};

export default Orders;
