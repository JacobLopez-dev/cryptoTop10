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
    currentAuthorGuides.filter(guide => guide.slug === slug)

    dispatch(deleteGuide(slug))

    if(isSuccess){
        toast.info(slug+'deleted') 
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
        <div className="card bg-secondary w-96 shadow-xl rounded-xl" key={guide._id}>
          <figure>
            <div className='bg-primary rounded-xl mb-4 w-full'>
              <img src={guide.coverImage} alt="guide-cover" className='h-56 w-full'/>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{guide.title}</h2>
            <p>{guide.description}</p>
            <div className="card-actions justify-end">
              <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="delete" onClick={()=> deleteSelectedGuide(guide.slug)}><FaTrash/></button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default UserGuides