import './sign_up.css';
const sign_up = () => {
    return (
    <div class="container">
        <form action="#">
            <h2>Sign Up</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="input-group">
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
)}
export default sign_up;
