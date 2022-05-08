import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, getTopCryptos, reset} from '../features/topCryptos/topCryptosSlice'
import Stats from '../components/cryptos/Stats'
import CryptoConverter from '../components/cryptos/CryptoConverter'
import CryptoSocials from '../components/cryptos/CryptoSocials'
import cryptoFlatten from '../utils/flattenObject'

function CryptoPage() {
    const { isSuccess, singleCrypto, cryptos} = useSelector((state) => state.cryptos)
    let {cryptoID} = useParams();
    const dispatch = useDispatch()

    // Reset state after successful data retrieval 
    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
            console.log('Crypto Page Reset')
        }
    }, [dispatch,isSuccess])

    // Get the data for a single crypto 
    // Then call for the current top 10 again **Trying to find a way to limit API calls, homepage: 1 call , cryptoPage: 2 calls **
    useEffect(() =>{
        dispatch(getTopCryptos())
        dispatch(getSingleCrypto(cryptoID))
        console.log('Crypto page data dispatches')
    },[dispatch, cryptoID])
     

    // // Filter the top 10 to get data for the single crypto requested to access market data
    let cryptoMarketData = cryptos.filter(crypto => crypto.id === parseInt(cryptoID))
    
    // Flatten meta Data && the marketdata for that crypto
    let flattenedCryptoMarketData = cryptoFlatten.flattenMarketData(cryptoMarketData)
    
    // destructure data from flattened Single Crypto Object
    let {cmc_rank, market_cap, price, percent_change_24h, volume_24h, volume_change_24h} = flattenedCryptoMarketData
    let {logo, name, symbol, urls} = singleCrypto
    // // Logs 
    console.log(singleCrypto)
    // console.log(cryptos)
    console.log(flattenedCryptoMarketData)

    // console.log(flattenedCryptoMarketData)
 // End Logs

  return (
    <>
     <header className='flex items-center bg-primary p-3 rounded-b-3xl w-full'>
       {logo && <img className='mask mask-circle bg-white' src={`${logo}`} alt={`${name}`}/>}
        <h2 className='ml-3 text-2xl'>{name} </h2>
        <h2 className='mt-2 ml-1 text-sm'>{symbol}</h2>
        <h3 className='ml-auto text-2xl'>Rank: {cmc_rank}</h3>
     </header>

     <main className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6'>
        <Stats marketCap={market_cap} price={price} change={percent_change_24h} volume={volume_24h} volumeChange={volume_change_24h}/>
        <CryptoConverter placeHolderPrice={price} symbol={symbol}/>
        <CryptoSocials urls={urls}/>
     </main>
    </>
  )
}

export default CryptoPage
