import Button from "./Button";
import { useContext } from "react";
import contextcreater from "../context/Context-sample";
import "./style.css";
import audio from "../../audio/audio.mp3";
import audio2 from "../../audio/audio2.mp3";
import audio3 from "../../audio/audio3.mp3";
import ReactHowler, { Howl, Howler } from "react-howler";
import { useState } from "react";
import audioimg1 from "../../images/audio1.jpg";
import audioimg2 from "../../images/audio2.jpg";
import audioimg3 from "../../images/audio3.jpg";
const audioLoop = [audio, audio2, audio3];
const ImageLoop = [audioimg1, audioimg2, audioimg3];
let count = 0;
export default function HowlerBox() {
  const [play, setPlay] = useState(false);
  const [audioPlay, setAudioPlay] = useState(audioLoop[count]);
  const [imagePlay, setImagePlay] = useState(ImageLoop[count]);

  const { dark } = useContext(contextcreater);
  const backGroundColor = dark == "black" ? "black" : "white";

  function SoundPlay() {
    if (play === false) {
      setPlay(true);
    }
  }

  function pausePlay() {
    if (play === true) {
      setPlay(false);
    }
  }
  function nextPlay() {
    if (count == audioLoop.length - 1) {
      count = 0;
    } else {
      count++;
    }
    setAudioPlay(audioLoop[count]);
    setImagePlay(ImageLoop[count]);
  }

  function prevPlay() {
    console.log("done");
    if (count == 0) {
      count = audioLoop.length - 1;
    } else {
      count--;
    }
    setAudioPlay(audioLoop[count]);
    setImagePlay(ImageLoop[count]);
    if (play == false) {
      setPlay(true);
    }
  }
  return (
    <>
      <div className={dark} id="bg">
        <div
          className="howler-container"
          id={dark === "bgdark" ? "bg-dark-howler" : "bg-light-howler"}
        >
          <div className="video-block">
            <img src={imagePlay} alt="" />
          </div>
          <div className="howler-box">
            <ul className="howler-box-item">
              <ReactHowler src={audioPlay} playing={play} />
              <li>
                <svg
                  onClick={prevPlay}
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <g transform="rotate(180 256 256)">
                    <path
                      fill="white"
                      d="m0 381.4l237.7-118.9L0 143.6v237.8zm237.7-118.9v118.9l237.7-118.9l-237.7-118.9v118.9zm237.7-118.9v237.8H512V143.6h-36.6z"
                    />
                  </g>
                </svg>
              </li>
              <li>
                {play === true ? (
                  <svg
                    onClick={pausePlay}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="white" d="M14 19V5h4v14h-4Zm-8 0V5h4v14H6Z" />
                  </svg>
                ) : (
                  <svg
                    onClick={SoundPlay}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="white" d="M8 5.14v14l11-7l-11-7Z" />
                  </svg>
                )}
              </li>
              <li>
                <svg
                  onClick={nextPlay}
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="m0 381.4l237.7-118.9L0 143.6v237.8zm237.7-118.9v118.9l237.7-118.9l-237.7-118.9v118.9zm237.7-118.9v237.8H512V143.6h-36.6z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
