import createNav from "./components/navBar.js";
import './styles/nav.css';


(function (){
    console.log("starting...");
 
    document.body.appendChild(createNav()); // Call createNav() to get the DOM node
})()
// console.log("Hello WOrld!");
// console.log("damon bolte")