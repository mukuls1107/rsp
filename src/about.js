import createNav from "./components/navBar.js";
import loadAboutInfo from "./components/aboutSection.js"
import './styles/about.css'
import './styles/nav.css';


(function (){
    console.log("starting...");
 
    document.body.appendChild(createNav()); // Call createNav() to get the DOM node
    document.body.appendChild(loadAboutInfo())
    
})()
// console.log("Hello WOrld!");
// console.log("damon bolte")