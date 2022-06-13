import { SignUp } from "components/SignUp"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return(
        <div>
            <h1>Register </h1>
            <SignUp />
            <p>
                Have an acc? <Link to="/login">Log In</Link>
            </p>
        </div>
    )
}

export default RegisterPage