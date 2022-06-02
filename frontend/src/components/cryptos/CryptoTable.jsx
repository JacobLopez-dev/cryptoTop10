import {useSelector} from 'react-redux'
import CryptoTableItem from '../cryptos/CryptoTableItem'
import Spinner from '../Spinner'
import { motion, AnimatePresence } from 'framer-motion';


function CryptoTable() {

    const {isLoading} = useSelector((state) => state.cryptos)

  
    if(isLoading){
      return <Spinner/>
    }
    
  return (
    <div className="overflow-x-auto w-full mt-5 grid">
       <AnimatePresence>
      <motion.div  className="grid lg:w-11/12 justify-self-center"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 1 }}
      >
    <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Current Price</th>
            <th>Market Cap</th>
            <th>24hr % +/-</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
        <CryptoTableItem/>
      </tbody>
      </table>
      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default CryptoTable