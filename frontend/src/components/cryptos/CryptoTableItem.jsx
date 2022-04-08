import CryptoModal from "./CryptoModal";

function CryptoTableItem({cryptos}) {

    let count = 1;
  
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
                  <input type="checkbox" id={crypto.name} className="modal-toggle"></input>
                  <CryptoModal key={crypto.name} crypto={crypto}/>
                </td>
            </tr>
        ))}
    </>
  )
}

export default CryptoTableItem