import React, { useState } from "react";
import h1 from "../images/hat3.jpg"; // image should be in SRC folder if we are imporing

const Content = () => {
  const [products, setproducts] = useState([
    {
      pcode: 1,
      pName: "A",
      image: "../images/hat3.jpg", //Importing image from public folder
    },
    {
      pcode: 2,
      pName: "B",
      image: "../images/hat2.jpg", // without imporing if we are using the link then the image should be in public foder
    },
    {
      pcode: 3,
      pName: "C",
      image: "../images/hat4.jpg",
    },
    {
      pcode: 4,
      pName: "D",
      image: "../images/hat5.jpg",
    },
  ]);
  {
    /*const addValues = () => {
    let nobj = { pcode: 5, pName: "e" };
    let new1 = products.push(nobj);
    setproducts(new1);
  };*/
  }
  var str = {
    width: "10rem",
    height: "10rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className="container">
        {products.map((pobj, index) => (
          <div
            className="box"
            key={index}
            style={{
              backgroundImage: "url(" + pobj.image + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
      {/*<ul>
        {products.map((pobj, index) => (
          <li key={index}>
            {pobj.pName}
            <img src={pobj.image} style={str} />
          </li>
        ))}
        </ul>*/}
    </>
  );
};
export default Content;
