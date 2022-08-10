import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getUsersGuides, resetGuides } from '../features/guides/guidesSlice'
import UserGuides from '../components/guides/userGuides/UserGuides'
import Particle from '../components/layout/Particle'
import Spinner from '../components/Spinner'

function Profile() {
  const {user} = useSelector((state) => state.auth)
  const {currentAuthorGuides, isSuccess, isLoading} = useSelector((state) => state.guides)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
        if(isSuccess) {
            dispatch(resetGuides())
        }
        console.log('profile page reset')
    }
    
}, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getUsersGuides(user._id))
    console.log('Profile page dispatch')
  }, [dispatch, user._id])

  if(isLoading){
    return (
      <Spinner/>
    )
  }

  return (
    <>
    {/* Header */}
      <div className="header h-96 bg-primary grid">
        <Particle height={400}/>
        <h1 className='text-4xl text-neutral-content place-self-center'>Hello, {user.name}</h1>
      </div>
      <div className="w-full flex items-center justify-between mt-5 p-5">
        <h2 className='text-3xl'>Your Articles</h2>
        <Link to='/new-guide'>
          <button className='btn bg-secondary rounded-lg'>New Article</button>
        </Link>
      </div>
      <section className="h-fit p-5 flex flex-col items-center">
        {currentAuthorGuides && <UserGuides/>}
      </section>
    </>
  )
}

export default Profile