import { NavLink } from "react-router-dom";
// import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink  to='/' style={({isActive})=>{return{color: isActive?'black':'blue'}}}><span>Home</span></NavLink>
            <NavLink  to='/registration' style={({isActive})=>{return{color: isActive?'black':'blue'}}}><span>Registration</span></NavLink>
            <NavLink  to='/login' style={({isActive})=>{return{color: isActive?'black':'blue'}}}><span>Login</span></NavLink>
            <NavLink  to='/tracker' style={({isActive})=>{return{color: isActive?'black':'blue'}}}><span>Traker</span></NavLink>
        </nav>   
    )
}

export default Navigation;