import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../../../hooks/useAuthStatus'
import Spinner from '../../../components/Spinner'

const AdminRoute = () => {
    const {loggedIn, checkingStatus, userIsAdmin} = useAuthStatus()

    if(checkingStatus){
        return <Spinner/>
    }

  return loggedIn && userIsAdmin ? <Outlet/> : <Navigate to='/'/>
}

export default AdminRoute