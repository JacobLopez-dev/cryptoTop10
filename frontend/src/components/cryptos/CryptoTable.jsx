import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTopCryptos, reset} from '../../features/topCryptos/topCryptosSlice'
import CryptoTableItem from '../cryptos/CryptoTableItem'

function CryptoTable() {

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
    <div className="overflow-x-auto mt-5">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Current Price</th>
            <th>Market Cap</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
        <CryptoTableItem cryptos={cryptos}/>
      </tbody>
      </table>
    </div>
  )
}

export default CryptoTable