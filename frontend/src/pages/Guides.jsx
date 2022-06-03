// See sundae swap https://help.sundaeswap.finance/en/
import { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaBook, FaPenSquare} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {getGuides, resetGuides} from '../features/guides/guidesSlice'
import GuideList from '../components/guides/GuideList'

function Guides() {

const {user} = useSelector(state => state.auth)
const {guides, isLoading, isSuccess} = useSelector((state) => state.guides)
const dispatch = useDispatch()


useEffect(() => {
  return () => {
      if(isSuccess) {
          dispatch(resetGuides())
      }
      console.log('guide page reset')
  }
}, [dispatch, isSuccess])

useEffect(() => {
  dispatch(getGuides())
  console.log('Guide page get dispatch')
}, [dispatch])

console.log(guides)

  return (
    <div className="h-screen">
      <header className='flex items-center bg-primary text-neutral-content p-5 rounded-b-3xl w-full'>
        <h2 className='ml-3 text-2xl flex items-center'>
          Crypto Guides 
          <FaBook className='ml-3'/>
        </h2>
        {user !== null && 
        <Link className='ml-auto flex items-center hover:text-white' to='/new-guide'>
          <div className="tooltip tooltip-accent tooltip-bottom mr-2" data-tip="new guide">
            <FaPenSquare className='text-4xl'/> 
          </div>
        </Link>}
      </header>
          {/* guides */}
          <GuideList/>
   </div>
  )
}

export default Guides