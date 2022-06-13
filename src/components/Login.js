import {Form} from './Form'
import {useDispatch} from 'react-redux'
import {setUser} from 'store/slices/userSlice'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
            title="log in"
            handleClick={handleLogin}
        />
    )
}
