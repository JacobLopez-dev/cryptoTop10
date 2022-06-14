import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getTopCryptos, reset} from '../features/topCryptos/topCryptosSlice'
// import { getGuides, resetGuides } from '../features/guides/guidesSlice'
import CryptoTable from '../components/cryptos/CryptoTable'
import Hero from '../components/layout/Hero'
import Spinner from '../components/Spinner'
import Features from '../components/layout/Features'

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
    <Hero title={'Welcome'} description={'This is crypto top 10'}/>
    {cryptos && <CryptoTable/>}
    <div className="divider"></div>
    <Features/>
   </>
  )
}

export default Home
