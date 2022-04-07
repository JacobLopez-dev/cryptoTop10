import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTopCryptos, reset} from '../features/topCryptos/topCryptosSlice'

function Home() {

  const {cryptos, isLoading, isSuccess} = useSelector((state) => state.cryptos)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
        if(isSuccess) {
            dispatch(reset())
        }
        console.log('from effect 2')
    }
    
}, [dispatch, isSuccess])

  useEffect(() => {
     dispatch(getTopCryptos())
     console.log('from effect 1')
  }, [dispatch])


  
  
  return (
   <>

    {cryptos.map(crypto => (
      <h1 key={crypto.name}>{crypto.name}</h1>
    ))}
   </>
  )
}

export default Home