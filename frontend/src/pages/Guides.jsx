// See sundae swap https://help.sundaeswap.finance/en/
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getGuides, resetGuides} from '../features/guides/guidesSlice'
import GuideList from '../components/guides/GuideList'
import Spinner from '../components/Spinner'
import Hero from '../components/layout/Hero'

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
      <Hero title={'Crypto Guides'} description={'Here you will find the most useful guides on the internet for getting started on your quest for crypto knowledge.'}/>
      <section className='w-full h-full grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6 mt-5'>
        <GuideList/>
      </section>
   </div>
  )
}

export default Guides