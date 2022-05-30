// See sundae swap https://help.sundaeswap.finance/en/
import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaBook, FaPenSquare} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
function Guides() {

//   const dispatch = useDispatch()
  
//   useEffect(() => {
//     return () => {
//             dispatch(reset())
//         console.log('Crypto Page Reset')
//     }
// }, [])

const dispatch = useDispatch()
const navigate = useNavigate()

const {user} = useSelector(state => state.auth)

  return (
    <div className="h-screen">
      <header className='flex items-center bg-primary p-5 rounded-b-3xl w-full'>
        <h2 className='ml-3 text-2xl flex items-center'>
          Crypto Guides 
          <FaBook className='ml-3'/>
        </h2>
        {user !== null && 
        <Link className='ml-auto flex items-center hover:text-white' to='/new-guide'>
          New Guide <FaPenSquare className='text-4xl'/> 
        </Link>}
      </header>
          {/* guides */}
          <div className="border-2">Guides</div>
   </div>
  )
}

export default Guides