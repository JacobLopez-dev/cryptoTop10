import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUsersGuides, resetGuides } from '../features/guides/guidesSlice'
import UserGuides from '../components/guides/userGuides/UserGuides'
import Particle from '../components/layout/Particle'


function Profile() {
  const {user} = useSelector((state) => state.auth)
  const {currentAuthorGuides, isSuccess} = useSelector((state) => state.guides)

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

  return (
    <div>
      <div className="header h-96 flex flex-col bg-primary justify-center items-center">
        <Particle height={425}/>
        <h1 className='text-3xl'>Hello, {user.name}</h1>
      </div>
      <div className="h-screen p-5">
        {currentAuthorGuides && <UserGuides/>}
      </div>
    </div>
  )
}

export default Profile