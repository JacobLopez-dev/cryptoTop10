import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, reset} from '../../features/topCryptos/topCryptosSlice'
import BackButton from '../buttons/BackButton'

function CryptoPage() {
    const {isSuccess, cryptos, singleCrypto} = useSelector((state) => state.cryptos)
    let {cryptoId} = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
            console.log('from crypto page')
        }
        
    }, [dispatch, isSuccess])

    useEffect(() =>{
        console.log(cryptoId.toLowerCase().replace(/\s+/g, '-'))
        dispatch(getSingleCrypto(cryptoId.toLowerCase().replace(/\s+/g, '-')))
    },[dispatch])

    const handleClick = (location) => {
        window.open(location)
    }

    const flattenObj = (ob) => {
        // The object which contains the
        // final result
        let result = {};
     
        // loop through the object "ob"
        for (const i in ob) {
            // We check the type of the i using
            // typeof() function and recursively
            // call the function again
            if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
                const temp = flattenObj(ob[i]);
                for (const j in temp) {
                    // Store temp in result
                    result[ j] = temp[j];
                }
            }
            // Else store ob[i] in result directly
            else {
                result[i] = ob[i];
            }
        }
        return result;
    };
     
    console.log(flattenObj(singleCrypto))
    let {symbol, logo, twitter, description} = flattenObj(singleCrypto)

  return (
    <div className="flex justify-center items-center w-full h-full">

        <div className="card p-5 lg:card-side bg-base-100 shadow-xl">
            {logo && <figure><img src={`${logo}`} alt="Album"/></figure>}
            <div className="card-body">
                <h2 className="card-title">{symbol}</h2>
                <p>Crypto info</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleClick(twitter)} className="btn btn-primary">Twitter</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CryptoPage