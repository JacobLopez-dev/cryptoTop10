import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getTopCryptos, reset} from '../features/topCryptos/topCryptosSlice'
import CryptoTable from '../components/cryptos/CryptoTable'
import Features from '../components/layout/Features'
import Particle from '../components/layout/Particle'

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
    <div className="hero h-96 bg-primary">
      <Particle height={450}/>
      <div className="hero-content text-center">
        <div className="max-w-md text-neutral-content">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="py-6">
            This is crypto top 10
          </p>
        </div>
      </div>
    </div>
    {cryptos && <CryptoTable/>}
    <div className="divider"></div>
    <Features/>
   </>
  )
}

export default Home
