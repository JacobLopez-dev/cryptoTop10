import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, reset} from '../features/topCryptos/topCryptosSlice'
import Stats from '../components/cryptos/Stats'
import CryptoConverter from '../components/cryptos/CryptoConverter'
// import BackButton from '../components/buttons/BackButton'

function CryptoPage() {
    const { isSuccess, singleCrypto, cryptos} = useSelector((state) => state.cryptos)
    let {cryptoSlug} = useParams();
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
        dispatch(getSingleCrypto(cryptoSlug))
    },[dispatch, cryptoSlug])

    // Currently if a crypto runs on a blockchain like Etherum it will flatten the object but replace the correct data with the data as it relates to etherum
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
    console.log(singleCrypto)
    console.log(cryptos)
    let {logo, name, symbol} = flattenObj(singleCrypto)

  return (
    <div>
        <header className='flex items-center bg-primary p-3 rounded-b-3xl '>
            {logo && <figure><img className='mask mask-circle bg-white' src={`${logo}`} alt="Album"/></figure>}
            <h2 className='m-3 text-2xl'>{name} <span className='text-sm'>{symbol}</span> </h2>
        </header>
        <main>
        <div className="flex flex-col w-full lg:flex-row mt-3 p-3">
            <div className="grid flex-grow h-fit card bg-base-300 p-3 rounded-box place-items-center border-red-400">
                <Stats/>
            </div> 

            <div className="divider lg:divider-horizontal"></div> 

            <div className="grid flex-grow h-fit card bg-base-300 p-3 rounded-box place-items-center">
                <CryptoConverter/>
            </div>
        </div>
        </main>
    </div>
  )
}

export default CryptoPage