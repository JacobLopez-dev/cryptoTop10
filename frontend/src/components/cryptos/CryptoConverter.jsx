import {useSelector, useDispatch} from 'react-redux'
import {FaExchangeAlt} from 'react-icons/fa'

function CryptoConverter({placeHolderPrice, symbol}) {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e)
    }

  return (
    <div className="card bg-neutral p-3 text-neutral-content w-11/12 md:col-span-2 justify-self-center lg:col-span-1 col-span-1">
        <div className="card-body items-center text-center">
            <h2 className="card-title">Crypto converter</h2>

            <form className='flex flex-col items-center text-center' onSubmit={handleSubmit}>
            {/* Crypto */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Enter amount</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="1" className="input input-bordered text-base-content"/>
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
                     {placeHolderPrice && <input type="text" placeholder={placeHolderPrice.toLocaleString('en-US')} className="input input-bordered text-base-content"/>}
                     <span className='bg-secondary'>USD</span>
                </label>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CryptoConverter