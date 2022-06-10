import {FaNewspaper, FaBookReader} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

function Features() {
  return (
    <>
    
    <div className="flex lg:flex-row justify-center p-5">
    <AnimatePresence>
      <motion.div  className="grid lg:w-11/12 justify-self-center"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 2 }}
      >
      <div className="flex flex-col lg:flex-row w-full">
      {/* Card 1 */}
      <div className="grid flex-grow h-fit rounded-box place-items-center p-3 text-neutral-content">
          <div className="card w-8/12 p-3 bg-primary shadow-2xl rounded-lg">
            <figure><FaBookReader className='feature-icon'/></figure>
            <div className="card-body">
              <h2 className="card-title">Guides</h2>
              <p>New to the crypto space, and looking to learn more? <br/> Check out our guides for all of the information you need.</p>
              <div className="card-actions justify-end">
                <Link to='/guides'><button className="btn btn-info rounded-lg hover:-translate-y-1 hover:text-neutral-content">Learn</button></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider lg:divider-horizontal"></div>

        {/* Card 2 */}
        <div className="grid flex-grow h-fit rounded-box place-items-center p-3 text-neutral-content">
          <div className="card w-8/12 p-3 bg-primary shadow-2xl rounded-lg">
            <figure><FaNewspaper className='feature-icon'/></figure>
            <div className="card-body">
              <h2 className="card-title">Latest Updates</h2>
              <p>For the latest news and updates in the crypto space, <br/> please check out our news section.</p>
              <div className="card-actions justify-end">
                <Link to='/news'><button className="btn btn-info rounded-lg hover:-translate-y-1 hover:text-neutral-content">News</button></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      </motion.div>
      </AnimatePresence>
    </div>
    </>
  )
}

export default Features