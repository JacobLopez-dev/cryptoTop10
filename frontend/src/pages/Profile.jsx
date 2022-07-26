import {useSelector} from 'react-redux'
import {useEffect} from 'react'

function Profile() {
  const {user} = useSelector((state) => state.auth)

  
  return (
    <>
        <h1>{user.name}</h1>
    </>
  )
}

export default Profile