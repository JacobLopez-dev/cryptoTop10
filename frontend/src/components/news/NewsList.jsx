import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getNewsArticles} from '../../features/news/newsSlice'

import NewsCard from './NewsCard'
import Spinner from '../Spinner'

function NewsList() {
  const {newsArticles, isLoading} = useSelector((state) => state.newsArticles)
  const {cryptos} = useSelector((state) => state.cryptos)

  const dispatch = useDispatch()

  useEffect(() => {
    if(cryptos){
      const cryptoList = (cryptos.map(crypto => crypto.symbol))
        dispatch(getNewsArticles({
          cryptoList: cryptoList,
          page: 1
        }))
        console.log(cryptoList)
    }
  },[cryptos, dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
    {
      newsArticles.map(article => (
        <NewsCard article={article} key={article.title}/>
      ))
    }
    </>
  )
}

export default NewsList