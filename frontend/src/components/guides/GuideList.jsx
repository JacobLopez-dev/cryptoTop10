import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function GuideList() {
    const {guides} = useSelector((state) => state.guides)

  return (
    <>
        {guides.map(guide => (
            <div className="card bg-secondary w-96 shadow-xl h-fit rounded-xl" key={guide._id}>
              <figure>
                <div className='h-56 w-full bg-primary rounded-xl mb-4'>
                  <img src={guide.coverImage}/>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{guide.title}</h2>
                <p>{guide.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/guide/${guide.slug}`}>
                    <button className="btn btn-primary rounded-lg">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
        ))}
    </>
  )
}

export default GuideList