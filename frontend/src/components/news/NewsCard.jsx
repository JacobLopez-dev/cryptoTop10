
function NewsCard({article}) {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card bg-secondary h-full w-96 shadow-xl rounded-xl">
    <figure>
      <div className='bg-primary rounded-xl mb-4 w-full'>
        <img src={article.image_url} alt="article-cover" className='h-56 w-full'/>
      </div>
    </figure>
    <div className="card-body -mt-5">
      <h3 className='text-sm'>From {article.source_name}</h3>
      <div className="flex text-sm">
        <p>{article.date.slice(0,17)}</p>
        <p className={article.sentiment}>{article.sentiment}</p>
      </div>
      <h2 className="card-title hover:text-primary cursor-pointer" onClick={() => openInNewTab(article.news_url)}>{article.title}</h2>
    </div>
  </div>
  )
}

export default NewsCard