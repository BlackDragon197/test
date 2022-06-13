import {Navigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {removeUser} from "store/slices/userSlice"
import {fetchRest} from "store/slices/restSlice"
import {RestList} from '../components/RestList';
import {useEffect} from "react";
import {Filters} from "components/Filters";

const HomePage = () => {
    const {isAuth, email} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        isAuth && dispatch(fetchRest())
    }, [])

    return isAuth ? (
        <div>
            <span>user: {email}</span>
            <div>
                <RestList/>
                <Filters/>
            </div>
            <button
                style={{position: 'absolute', top: '35px', left: '400px'}}
                onClick={() => dispatch(removeUser())}
            >Log off
            </button>
        </div>
    ) : (

        <Navigate replace to="/login"/>
    )
}

export default HomePage
