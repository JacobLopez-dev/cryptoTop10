import {useSelector} from 'react-redux'
import CryptoTableItem from '../cryptos/CryptoTableItem'
import Spinner from '../Spinner'

function CryptoTable() {

    const {isLoading} = useSelector((state) => state.cryptos)

  
    if(isLoading){
      return <Spinner/>
    }
    
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
        <CryptoTableItem/>
      </tbody>
      </table>
    </div>
  )
}

export default CryptoTable