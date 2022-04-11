import CryptoModal from "./CryptoModal";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, reset} from '../../features/topCryptos/topCryptosSlice'

function CryptoTableItem() {
  const {isSuccess, cryptos, singleCrypto} = useSelector((state) => state.cryptos)

    let count = 1;

    const dispatch = useDispatch()

    const getMetaData = (crypto) => {
      console.log(crypto.toLowerCase().replace(/\s+/g, '-'))
      dispatch(getSingleCrypto(crypto.toLowerCase().replace(/\s+/g, '-')))
    }
    console.log(singleCrypto)

  return (
    <>
        {cryptos.map(crypto => (
            <tr className="hover" key={crypto.name}>
                <td>{count++}</td>
                <td>{crypto.name} <span className="text-sm text-stone-400">{crypto.symbol}</span> </td>
                <td><span className="text-sm text-stone-400">$</span> {( 1 * crypto.quote.USD.price.toFixed(2)).toLocaleString("en-US")}</td>
                <td><span className="text-sm text-stone-400">$</span> {(Math.trunc(crypto.circulating_supply) * crypto.quote.USD.price.toFixed(0)).toLocaleString("en-US") }</td>
                <td>
                  <label htmlFor={crypto.name} className="btn modal-button">View more</label>
                  <input type="checkbox" id={crypto.name} onClick={(e) => getMetaData(e.target.id)} className="modal-toggle"></input>
                  <CryptoModal key={crypto.name} crypto={crypto}/>
                </td>
            </tr>
        ))}
    </>
  )
}

export default CryptoTableItem