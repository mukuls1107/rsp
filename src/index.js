import createNav from "./components/navBar.js";
import displayHome from "./components/homeSection.js";

import './styles/nav.css';
import './styles/home.css'
import './styles/contact.css'


(function (){
    console.log("starting...");
 
    document.body.appendChild(createNav()); // Call createNav() to get the DOM node
    document.body.appendChild(displayHome());
})()
