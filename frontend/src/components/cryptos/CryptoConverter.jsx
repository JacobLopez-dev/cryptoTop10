import {useState} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import {FaExchangeAlt} from 'react-icons/fa'

function CryptoConverter({price, symbol}) {

    // const [fromCurrency, setFromCurrency] = useState()
    // const [toCurrency, setToCurrency] = useState()
    // const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount;
    if(amountInFromCurrency){
        fromAmount = amount
        toAmount = (amount * price || 0).toFixed(2)
    }else{
        toAmount = amount
        fromAmount = (amount / price).toFixed(2)
    }

    const handleFromAmountChange = (e) => {
        // console.log('From Amount:', e.target.value)
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    const handleToAmountChange = (e) => {
        // console.log('To Amount', e.target.value)
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }


  return (
    <div className="card bg-neutral p-3 text-neutral-content w-11/12 md:col-span-2 justify-self-center lg:col-span-1 col-span-1 border-2">
        <div className="card-body items-center text-center">
            <h2 className="card-title">Crypto converter</h2>

            <form className='flex flex-col items-center text-center'>
            {/* Crypto */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Enter amount</span>
                </label>
                <label className="input-group">
                    <input type="text" onChange={(e) => handleFromAmountChange(e)} value={fromAmount} className="input input-bordered text-base-content"/>
                     {symbol && <span className='bg-primary'>{symbol}</span>}
                </label>
            </div>
            <FaExchangeAlt className='text-3xl mt-5'/>
            {/* Fiat */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Enter amount</span>
                </label>
                <label className="input-group">
                     {price && <input type="text" value={toAmount} onChange={(e) => handleToAmountChange(e)} className="input input-bordered text-base-content"/>}
                     <span className='bg-secondary'>USD</span>
                </label>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CryptoConverter