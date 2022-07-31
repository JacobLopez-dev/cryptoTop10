import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getNewsArticles, resetNews} from '../features/news/newsSlice'
import Particle from '../components/layout/Particle'
import NewsList from '../components/news/NewsList';
import Spinner from '../components/Spinner'

function News() {

  const { newsArticles, isLoading, isSuccess} = useSelector((state) => state.newsArticles)
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
    dispatch(getNewsArticles())
    console.log('news dispatch')
  }, [dispatch])


  console.log(newsArticles)

  if(isLoading){
    return <Spinner/>
  }

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
        {newsArticles && <NewsList newsArticles={newsArticles}/>}
      </section>
    </div>
  )
}

export default News

