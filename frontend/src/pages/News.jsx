import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {resetNews} from '../features/news/newsSlice'
import {getTopCryptos} from '../features/topCryptos/topCryptosSlice'
import {prevPage, nextPage} from '../features/news/newsSlice'

import Particle from '../components/layout/Particle'
import NewsList from '../components/news/NewsList';

function News() {
  const {cryptos, isSuccess} = useSelector((state) => state.cryptos)
  const {page} = useSelector((state) => state.newsArticles)


  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
        if(isSuccess) {
            dispatch(resetNews())
        }
        console.log('news page reset')
    }
    
}, [dispatch, isSuccess])

useEffect(() => {
  dispatch(getTopCryptos())
  console.log('news dispatch')
}, [dispatch])


  return (
    <div className="h-fit">
    <div className="hero h-96 bg-primary">
        <Particle height={750}/>
        <div className="hero-content text-center">
          <div className="max-w-md text-neutral-content">
            <h1 className="text-5xl font-bold">CryptoNews</h1>
            <p className="py-6">
              The latest in Crypto News
            </p>
          </div>
        </div>
      </div>
      <section className='w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-10 mt-5'>
        {cryptos && <NewsList/>}
      </section>
      <div className="btn-group grid grid-cols-2 w-2/3 md:w-1/3 lg:w-1/3 mt-10 m-auto">
        {page !== 1 ? <button className="btn btn-outline" onClick={() => dispatch(prevPage())}>Previous page</button> : <button className="btn btn-outline" disabled>Previous page</button>}
        {page !== 5 ? <button className="btn btn-outline" onClick={() => dispatch(nextPage())}>Next Page</button> : <button className="btn btn-outline" disabled>Next page</button>}
      </div>
    </div>
  )
}

export default News

