import {Link} from 'react-router-dom'
function SideMenu({toggleMenu}) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-200">
        {/* <!-- Sidebar content here --> */}
        <li className='m-1' onClick={toggleMenu}>
        <Link to="/" className='text-2xl'>Home</Link>
        </li>
        <li className='m-1' onClick={toggleMenu}>
            <Link to="/articles" className='text-2xl'>Articles</Link>
        </li>
        <li className='m-1' onClick={toggleMenu}>
            <Link to="/news" className='text-2xl'>News</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default SideMenu

