import './Login.css';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div class="container">
        <form action="#">
            <h2>Login</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="input-group">
                <button type="submit">Login</button>
            </div>
            <div class="input-group">
                <Link to="sign_up">Don't have an account? Sign up</Link>
            </div>
        </form>
    </div>
)}
export default Login;
