import { useDispatch, useSelector } from "react-redux";
import { Slice } from "@reduxjs/toolkit";
import img from "../../images/p1.webp";
import product2 from "../../images/p2.webp";
import product3 from "../../images/p3.webp";
import product4 from "../../images/p4.webp";

import { incrimentByCart } from "../redux/slice";
import "./style.css";
export default function Product() {
  const count = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();
  function addToCart() {
    dispatch(incrimentByCart());
    console.log(count);
  }
  return (
    <>
      <div className="product-container">
        <div className="box">
          <div className="box-img">
            <img src={img} alt="" />
          </div>
          <div className="box-icon">
            <svg
              onClick={addToCart}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6v4Z"
              />
            </svg>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={product2} alt="" />
          </div>
          <div className="box-icon">
            <svg
              onClick={addToCart}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6v4Z"
              />
            </svg>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={product3} alt="" />
          </div>
          <div className="box-icon">
            <svg
              onClick={addToCart}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6v4Z"
              />
            </svg>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={product4} alt="" />
          </div>
          <div className="box-icon">
            <svg
              onClick={addToCart}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6v4Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
