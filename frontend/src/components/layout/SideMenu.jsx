import {Link} from 'react-router-dom'

function SideMenu({toggleMenu}) {

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-56 lg:w-2/12 bg-secondary text-neutral-content">
        {/* <!-- Sidebar content here --> */}
        <li>
          <div className="flex-1 px-2 mx-2 lg:hidden">
            <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary px-2 mx-2">Crypto Top 10</Link>
          </div>
        </li>

        <li className='m-1' onClick={toggleMenu}>
        <Link to="/" className='text-2xl hover:text-white'>Home</Link>
        </li>

        <li className='m-1' onClick={toggleMenu}>
            <Link to="/guides" className='text-2xl hover:text-white'>Guides</Link>
        </li>

        <li className='m-1' onClick={toggleMenu}>
            <Link to="/news" className='text-2xl hover:text-white'>News</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default SideMenu

