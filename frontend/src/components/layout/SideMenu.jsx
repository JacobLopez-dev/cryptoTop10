import {Link} from 'react-router-dom'
import {BsGearFill} from 'react-icons/bs'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout, reset} from '../../features/auth/authSlice'

function SideMenu({toggleMenu}) {

  const {user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    toggleMenu()
  }



  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-64 lg:w-2/12 bg-secondary text-neutral-conten">
        {/* <!-- Sidebar content here --> */}
        <li onClick={toggleMenu}>
            <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary px-2 mx-2">Crypto Top 10</Link>
        </li>

        <li className='m-1 hover-bordered' onClick={toggleMenu}>
          <Link to="/" className='text-2xl hover:text-white'>Home</Link>
        </li>

        <li className='m-1 hover-bordered' onClick={toggleMenu}>
            <Link to="/guides" className='text-2xl hover:text-white'>Guides</Link>
        </li>

        <li className='m-1 hover-bordered' onClick={toggleMenu}>
            <Link to="/news" className='text-2xl hover:text-white'>News</Link>
        </li>
        <li className='m-1 mt-auto'>
          <div className="dropdown dropdown-top w-fit" id='settings-div'>
            <label tabIndex="0" id='settings-icon'>
              <BsGearFill className='text-3xl'/>
            </label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              {
                user ? 
                  <li>
                    <button className='btn bg-primary text-white' onClick={onLogout}>Logout</button>
                  </li> 
                :
                <>
                  <li onClick={toggleMenu}>
                    <Link to='/login'>Login</Link>
                 </li>
                 <li onClick={toggleMenu}>
                    <Link to='/register'>Register</Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu

