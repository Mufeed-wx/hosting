import sty2 from "../style/section.module.css";
import img from "../images/travel.jpg";
export default function Banner() {
  return (
    <>
      <div className={sty2.box}>
        <div className={sty2.content}>
          <div className={sty2.text}>
            <h1>Explore Your Journey</h1>
            <a href="">Book Now</a>
          </div>
          <div className={sty2.img}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
