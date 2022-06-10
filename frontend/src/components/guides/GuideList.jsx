import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function GuideList() {
    const {guides} = useSelector((state) => state.guides)

  return (
    <>
        {guides.map(guide => (
            <div className="card bg-secondary shadow-xl h-fit  rounded-xl" key={guide._id}>
              <figure><img className='h-96 w-96' src="https://source.unsplash.com/random/?3d-render/200x200" alt="Movie"/></figure>
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