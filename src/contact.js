import createNav from "./components/navBar.js";
import loadContactPage from "./components/contactSection.js";
import './styles/nav.css';
import './styles/contact.css';


(function (){
    console.log("starting...");
 
    document.body.appendChild(createNav()); // Call createNav() to get the DOM node
    document.body.appendChild(loadContactPage())
})()
// console.log("Hello WOrld!");
// console.log("damon bolte")