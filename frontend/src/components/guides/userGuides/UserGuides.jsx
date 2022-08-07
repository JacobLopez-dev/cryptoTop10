import {useSelector, useDispatch} from 'react-redux'
import { deleteGuide } from '../../../features/guides/guidesSlice'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
import {FaPencilAlt, FaEye, FaTrash} from 'react-icons/fa'
import Spinner from '../../Spinner'

function UserGuides() {
  const {currentAuthorGuides, isLoading, isSuccess, isError, message} = useSelector((state) => state.guides)

  const dispatch = useDispatch()

  const deleteSelectedGuide = (slug) => {
    dispatch(deleteGuide(slug))

    if(isSuccess){
      toast.info(slug+'deleted') 
      currentAuthorGuides.filter(guide => guide.slug === slug)
    }

    if(isError){
        toast.error(message)
    }
  }
  
  console.log(currentAuthorGuides)

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      {currentAuthorGuides.map(guide => (
        <article className="card lg:card-side bg-secondary shadow-xl mt-10 w-10/12 lg:w-8/12" key={guide._id}>
          <figure><img src={guide.coverImage} alt="guideImage"/></figure>
          <div className="card-body">
            <h2 className="card-title">{guide.title}</h2>
            <p>{guide.description}</p>
            <div className="card-actions justify-end">
            <Link to={`/guide/${guide.slug}`}>
              <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="View"><FaEye/></button>
            </Link>
              <Link to={`/guide/${guide.slug}/edit`}>
                <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="Edit"><FaPencilAlt/></button>
              </Link>
              <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="delete" onClick={()=> deleteSelectedGuide(guide.slug)}><FaTrash/></button>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export default UserGuides

