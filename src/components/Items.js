import React, { useState } from "react";

const Items = () => {
  const [products, setproducts] = useState([
    {
      pcode: 1,
      pName: A,
    },
    {
      pcode: 2,
      pName: B,
    },
    {
      pcode: 3,
      pName: C,
    },
    {
      pcode: 4,
      pName: D,
    },
  ]);
  return (
    <>
      <ul>products.map(pobj=>{<li>{pobj.pName}</li>})</ul>
    </>
  );
};
export default Items;
