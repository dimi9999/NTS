import {Link, useMatch, useResolvedPath } from "react-router-dom"; 
 
 export default function Footer() {
    return(
       <footer>
        Copyright &copy; 2023 Need to Sell. All Rights Reserved. Proudly Powered by <a target="_blank" href="https://eastwestrail.co.uk"> EastWest Rail Company </a>
        <Link to="/Terms"> Terms of Use </Link>|
        <Link to="/Privacy"> Privacy</Link>
       </footer>
    )
}