// See sundae swap https://help.sundaeswap.finance/en/
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getGuides, resetGuides} from '../features/guides/guidesSlice'
import GuideList from '../components/guides/GuideList'
import Spinner from '../components/Spinner'
import Particle from '../components/layout/Particle'

function Guides() {

const {guides, isLoading, isSuccess} = useSelector((state) => state.guides)
const dispatch = useDispatch()


useEffect(() => {
  return () => {
      if(isSuccess) {
          dispatch(resetGuides())
      }
      console.log('guide page reset')
  }
}, [dispatch, isSuccess])

useEffect(() => {
  dispatch(getGuides())
  console.log('Guide page get dispatch')
}, [dispatch])

console.log(guides)

if(isLoading){
  return <Spinner/>
}
  return (
    <div className="h-fit">
      <div className="hero h-96 bg-primary">
        <Particle height={300}/>
        <div className="hero-content text-center">
          <div className="max-w-md text-neutral-content">
            <h1 className="text-5xl font-bold">Crypto Guides</h1>
            <p className="py-6">
            Here you will find the most useful guides on the internet for getting started on your quest for crypto knowledge.
            </p>
          </div>
        </div>
      </div>
      <section className='w-full h-full grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6 mt-5'>
        <GuideList/>
      </section>
   </div>
  )
}

export default Guides