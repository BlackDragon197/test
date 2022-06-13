import {Form} from './Form'
import {useDispatch} from 'react-redux'
import {setUser} from 'store/slices/userSlice'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from 'react-router-dom';

export const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accesstoken,
                }))
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}
