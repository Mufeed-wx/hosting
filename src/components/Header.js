import { useSelector } from "react-redux";
import sty from "../style/mian.module.css";
import "../style/cart-style.css";
import contextcreater from "./context/Context-sample";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const { dark, setDark } = useContext(contextcreater);
  const count = useSelector((state) => state.counter.cart);
  function SetBlackBachGround(e) {
    e.preventDefault();
    setDark("bgdark");
  }
  function SetwhiteBackGround(e) {
    e.preventDefault();
    setDark("bgwhite");
  }
  return (
    <>
      <div className={sty.box}>
        <div className={sty.log}>
          <NavLink to="/Home">EXPLORE</NavLink>
        </div>
        <div className={sty.content}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {dark == "bgdark" ? (
                <>
                  <svg
                    onClick={SetwhiteBackGround}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="white"
                      d="M19 9.199h-.98c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799c0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5c3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4c0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1c.441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143c.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  {" "}
                  <svg
                    onClick={SetBlackBachGround}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20Z"
                    />
                  </svg>
                </>
              )}
            </li>

            <li>
              <div className="cart-container">
                <div className="cart-btn">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"
                    />
                  </svg>
                </div>
                <div className="cart-inc-button">
                  <span>{count}</span>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/booking">Booking</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
