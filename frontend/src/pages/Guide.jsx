import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import DOMPurify from 'dompurify'
import {getGuide, resetGuides} from '../features/guides/guidesSlice'

function Guide() {

  const {guide, isLoading, isSuccess, isError, message} = useSelector((state) => state.guides)

  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {slug} = useParams()

  useEffect(() => {
    if(isError){
        toast.error(message)
    }
    dispatch(getGuide(slug))
    dispatch(resetGuides())
},[isError, message, slug])

if(isLoading){
  return <Spinner/>
}

if(isError){
  return <h3>Something Went Wrong</h3>
}


  return (
    <div>
      <h1>
        {guide.title}
      </h1>
      <>
        {guide.markdown}
        <br/>
        <br/>
        <div
          dangerouslySetInnerHTML={{
                __html:
                guide.sanitizedHtml
          }}/>
      </>
    </div>
  )
}

export default Guide