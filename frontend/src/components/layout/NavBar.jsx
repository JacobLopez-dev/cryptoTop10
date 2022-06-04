import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../../features/auth/authSlice'
import Particle from './Particle'
import ThemeToggle from '../buttons/ThemeToggle'

function Navbar() {
  const {user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
  <>
    <nav className='navbar bg-base-300 w-full sticky top-0 z-50'>
    <div className="flex-none">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 hidden lg:block">
        <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary px-2 mx-2">Crypto Top 10</Link>
      </div>
      <div className="ml-auto">
      {user && 
        <div className="dropdown">
          <label tabIndex="0" className='btn m-4 rounded-lg'>{`Hello, ${user.name}`}</label>
          <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {user.isAdmin && <li>
              <Link to='/admin-dashboard'>Admin Dashboard</Link>
            </li>}
            <li>
              <Link to='/new-guide'>New Guide</Link>
            </li>
            {/* Will eventually lead to user profile */}
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <button className='btn bg-primary text-white' onClick={onLogout}>Logout</button>
            </li>
          </ul>
        </div>
      }
      <ThemeToggle/>
      </div>
    </nav>
  </>
  )
}

export default Navbar


