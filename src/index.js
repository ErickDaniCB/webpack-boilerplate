// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import img from "./space.jpg"

const myImg = new Image();
myImg.src = img;
document.body.appendChild(myImg);