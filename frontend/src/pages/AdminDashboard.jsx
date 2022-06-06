import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getGuides, resetGuides} from '../features/guides/guidesSlice'
import GuideTable from '../components/guides/GuideTable'

function AdminDashboard() {

  const {guides, isLoading, isSuccess} = useSelector((state) => state.guides)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getGuides())
    console.log('Guide page get dispatch')
  }, [dispatch])
  
  return (
    <>
    <div className='flex flex-col items-center h-screen'>
      <header className='flex items-center bg-primary p-5 rounded-b-3xl text-neutral-content w-full absolute inset-x-0'>
        <h2 className='ml-3 text-2xl'>Admin Dashboard</h2>
      </header>
      <div className="mt-20 w-full flex justify-center">
      <div tabIndex="0" className="collapse collapse-plus collapse-open bg-secondary rounded-box w-10/12">
        <h1 className="collapse-title text-3xl text-neutral-content">
          Guides
        </h1>
        <div className="collapse-content"> 
          <GuideTable guides={guides}/>  
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default AdminDashboard