import "./form.css"

function Form()
{


    return (
        <div className="parent">
            <h1>Instagram</h1>
            <div>
            <form className="details">
                <input placeholder="Phone number,username or email address"></input>
                <input placeholder="Password"></input>
                <div>Log In</div>
            </form>
            </div>
            
            <div className="orpart">
                <div><hr/></div>
                <div>OR</div>
                <div><hr/></div>            
            </div>

            <div>
                <h3>Log in with Facebook</h3>
                <h3>Forgotten your password ?</h3>
            </div>

            <div>
                <h3>Don't have an account ?Sign up</h3>
            </div>


        </div>
    )
}

export {Form}