import {Link} from "react-router-dom";
export default function Dashbord(){
    return <>
    <h1> Hey there! You have logged in successfully!</h1>
    <p><Link to="/">Click here to log out</Link></p>
    </>
}