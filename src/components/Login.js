export default function Login(){
    return(
            <div  className="login--container">
            <form className="login">
                    <h2>Login</h2>
                    <input  className = "login--input" type = "text" name ="email" 
                    placeholder = "Email Address"/>
                    <input className = "login--input" type="password" name = "password" 
                    placeholder = "Password"/>
            <div className="login--bottom">
                <p>New User?Create an account</p>
                <input className = "submit--button" type="submit" value = "Login" />
            </div>
            </form>
            </div>
    );
}