import {useSelector} from 'react-redux';
import NewsCard from './NewsCard'

function NewsList() {

  const {newsArticles} = useSelector((state) => state.news)

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