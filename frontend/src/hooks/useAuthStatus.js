import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const [userIsAdmin, setUserIsAdmin] = useState(false)

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }

    if(user && user.isAdmin){
      setUserIsAdmin(true)
    }

    setCheckingStatus(false)
  }, [user])

  return { loggedIn, checkingStatus, userIsAdmin }
}