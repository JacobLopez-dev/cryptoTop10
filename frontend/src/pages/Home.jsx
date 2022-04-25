import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getTopCryptos, reset} from '../features/topCryptos/topCryptosSlice'
import CryptoTable from '../components/cryptos/CryptoTable'

function Home() {

  const {isSuccess, cryptos} = useSelector((state) => state.cryptos)

  const dispatch = useDispatch()
  
  useEffect(() => {
    return () => {
        if(isSuccess) {
            dispatch(reset())
        }
        console.log('from effect 1')
    }
    
}, [dispatch, isSuccess])

  useEffect(() => {
     dispatch(getTopCryptos())
     console.log('from effect 2')
  }, [dispatch])

  console.log(cryptos)



  return (
   <>
    <CryptoTable/>
    <div className="divider"></div>
   </>
  )
}

export default Home