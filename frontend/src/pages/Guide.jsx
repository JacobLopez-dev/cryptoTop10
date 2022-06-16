import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import {getGuide, resetGuides} from '../features/guides/guidesSlice'

function Guide() {

  const {guide, isLoading, isError, isSuccess, message} = useSelector((state) => state.guides)

  const dispatch = useDispatch()
  const {slug} = useParams()

  useEffect(() => {
    if(isError){
        toast.error(message)
    }
    dispatch(getGuide(slug))
},[isError, message, slug, dispatch])


useEffect(() => {
  return () => {
      if(isSuccess) {
          dispatch(resetGuides())
      }
      console.log('admin guide reset')
  }
}, [dispatch, isSuccess])


if(isLoading){
  return <Spinner/>
}

if(isError){
  return <h3>Something Went Wrong</h3>
}


  return (
    <section className='flex flex-col w-10/12 m-auto h-fit p-5 text-neutral'>
    {/* Heading */}
    <div className="flex flex-col h-fit break-normal p-3 bg-neutral-content">
    {/* image below */}
      <div className='h-96 w-full bg-primary rounded-xl mb-4'>content</div>
      
      <div className="flex items-center justify-between mb-4">
        <h1 className='text-3xl'>
          {guide.title}
        </h1>
        <h3 className='text-xs'>Written by <br/>{guide.author}</h3>
      </div>
      <p>
        <i>{guide.description}</i>
      </p>
    </div>

    {/* Markdown */}
    <div className="p-10 bg-neutral-content boreder-2">
      <div className="divider"></div>
        {/* {guide.markdown} */}
        {/* {guide.sanitizedHtml} */}
        <br/>
        <br/>

        <div className='guideContent'
          dangerouslySetInnerHTML={{
                __html:
                guide.sanitizedHtml
          }}/>
      </div>
    </section>
  )
}

export default Guide