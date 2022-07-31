import NewsCard from './NewsCard'

function NewsList({newsArticles}) {

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