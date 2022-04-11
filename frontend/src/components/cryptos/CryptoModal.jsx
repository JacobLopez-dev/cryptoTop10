import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, reset} from '../../features/topCryptos/topCryptosSlice'

function CryptoModal({crypto}) {
  const {isSuccess, singleCrypto} = useSelector((state) => state.cryptos)
  
  return (
    <>
    <div className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <label htmlFor={crypto.name} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">{crypto.name}</h3>
        <p className="py-4">{crypto.symbol}</p>
      </div>
    </div>
    </>
  )
}

export default CryptoModal