import NewsCard from './NewsCard'
import {useSelector} from 'react-redux'
import Spinner from '../Spinner'

function NewsList() {

  const {isLoading} = useSelector((state) => state.newsArticles)


  if(isLoading){
    return <Spinner/>
  }

  return (
      <NewsCard/>
  )
}

export default NewsList