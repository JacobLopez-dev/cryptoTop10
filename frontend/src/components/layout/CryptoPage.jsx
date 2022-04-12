import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, reset} from '../../features/topCryptos/topCryptosSlice'

function CryptoPage() {
    const {isSuccess, cryptos, singleCrypto} = useSelector((state) => state.cryptos)
    let {cryptoId} = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
            console.log('from effect 2')
        }
        
    }, [dispatch, isSuccess])

    useEffect(() =>{
        console.log(cryptoId.toLowerCase().replace(/\s+/g, '-'))
        dispatch(getSingleCrypto(cryptoId.toLowerCase().replace(/\s+/g, '-')))
    },[])
    
    console.log(singleCrypto)
  return (
    <div>test{singleCrypto.id}test</div>

  )
}

export default CryptoPage