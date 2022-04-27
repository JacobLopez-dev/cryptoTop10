import {useSelector, useDispatch} from 'react-redux'
import flattenObj from '../../utils/flattenObject';
import {FaExchangeAlt} from 'react-icons/fa'

function CryptoConverter() {

    const {singleCrypto} = useSelector((state) => state.cryptos)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e)
    }


    let {symbol} = flattenObj(singleCrypto)

  return (
    <div className="card bg-neutral p-3 text-neutral-content">
        <div className="card-body items-center text-center">
            <h2 className="card-title">Crypto converter</h2>

            <form className='flex flex-col items-center text-center' onSubmit={handleSubmit}>
            {/* Crypto */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Enter amount</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="1" className="input input-bordered"/>
                     <span>{symbol}</span>
                </label>
            </div>
            <FaExchangeAlt className='text-3xl mt-5'/>
            {/* Fiat */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Enter amount</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="1" className="input input-bordered"/>
                     <span>USD</span>
                </label>
            </div>

            <div className="card-actions mt-3 justify-end">
                <button type="submit" className="btn btn-primary">convert</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CryptoConverter