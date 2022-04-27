import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, getTopCryptos, reset} from '../features/topCryptos/topCryptosSlice'
import Stats from '../components/cryptos/Stats'
import CryptoConverter from '../components/cryptos/CryptoConverter'
import flattenObj from '../utils/flattenObject'

function CryptoPage() {
    const { isSuccess, singleCrypto, cryptos} = useSelector((state) => state.cryptos)
    let {cryptoSlug} = useParams();
    const dispatch = useDispatch()

    // Reset state after successful data retrieval 
    // useEffect(() => {
    //     return () => {
    //         if(isSuccess) {
    //             dispatch(reset())
    //         }
    //         console.log('Crypto Page Reset')
    //     }
    // }, [dispatch, isSuccess])

    // Get the data for a single crypto 
    // Then call for the current top 10 again **Trying to find a way to limit API calls, homepage: 1 call , cryptoPage: 2 calls **
    useEffect(() =>{
        dispatch(getTopCryptos())
        dispatch(getSingleCrypto(cryptoSlug))
        console.log('Crypto page data dispatches')
    },[dispatch, cryptoSlug])
     
    // destructure data from flattened Single Crypto Object
    let flattenedSingleCrypto = flattenObj(singleCrypto)
    let {logo, name, symbol, slug} = flattenedSingleCrypto
    // Filter the top 10 to get data for the single crypto requested to access market data
    let cryptoMarketData = cryptos.filter(crypto => crypto.slug === cryptoSlug)
    let flattenedCryptoMarketData = flattenObj(cryptoMarketData)
    let {cmc_rank} = flattenedCryptoMarketData

    // Logs 
    console.log(flattenedSingleCrypto)
    console.log(flattenedCryptoMarketData)
    // End Logs

  return (
    <div>
        <header className='flex items-center bg-primary p-3 rounded-b-3xl '>
            {logo && <figure><img className='mask mask-circle bg-white' src={`${logo}`} alt="Album"/></figure>}
            <h2 className='m-3 text-2xl'>{name} <span className='text-sm'>{symbol}</span> </h2>
        </header>
        <main>
        <div className="flex flex-col w-full lg:flex-row mt-3 p-3">
            <div className="grid flex-grow h-fit card bg-base-300 p-3 rounded-box place-items-center border-red-400">
                <Stats cmcRank={cmc_rank}/>
            </div> 

            <div className="divider lg:divider-horizontal"></div> 

            <div className="grid flex-grow h-fit card bg-base-300 p-3 rounded-box place-items-center">
                <CryptoConverter />
            </div>
        </div>
        </main>
    </div>
  )
}

export default CryptoPage