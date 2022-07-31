import NewsCard from './NewsCard'
import {useSelector} from 'react-redux'
import Spinner from '../Spinner'

function NewsList() {

  const {newsArticles, isLoading} = useSelector((state) => state.newsArticles)


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