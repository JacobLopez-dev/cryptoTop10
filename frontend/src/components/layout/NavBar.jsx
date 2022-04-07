import {Link} from 'react-router-dom'
import ThemeToggle from '../buttons/ThemeToggle'

function Navbar() {
  return (
<>
    <nav className='navbar bg-base-300 w-full sticky top-0 z-50'>
    <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
        <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary px-2 mx-2">Crypto Top 10</Link>
      </div>
      <div className="">
        <ThemeToggle/>
      </div>
    </nav>
</>
  )
}

export default Navbar


