import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getTopCryptos, reset} from '../features/topCryptos/topCryptosSlice'
import CryptoTable from '../components/cryptos/CryptoTable'
import Hero from '../components/layout/Hero'

function Home() {

  const {isSuccess, cryptos} = useSelector((state) => state.cryptos)

  const dispatch = useDispatch()
  
  useEffect(() => {
    return () => {
        if(isSuccess) {
            dispatch(reset())
        }
        console.log('home page reset')
    }
    
}, [dispatch, isSuccess])

  useEffect(() => {
     dispatch(getTopCryptos())
     console.log('Home page get dispatch')
  }, [dispatch])

  console.log(cryptos)



  return (
   <>
    <Hero/>
    <CryptoTable/>
   </>
  )
}

export default Home
