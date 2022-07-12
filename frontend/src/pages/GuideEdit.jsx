import {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import { Editor } from '@tinymce/tinymce-react';
import {getGuide, resetGuides, updateGuide} from '../features/guides/guidesSlice'

function GuideEdit() {

  const {guide, isLoading, isError, isSuccess, message} = useSelector((state) => state.guides)

  const editorRef = useRef(null);
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [markdown, setMarkdown] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {slug} = useParams()


  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    dispatch(getGuide(slug))
  },[])

  useEffect(() => {
    return () => {
        if(isSuccess) {
            dispatch(resetGuides())
        }
        console.log('guides reset')
    }
  }, [dispatch, isSuccess])

const handleEditorChange = () => {
  let content = editorRef.current.getContent()
  setMarkdown(content)
}

  // dispatch guide data and slug
   // Data to dispatch:
      // title
      // Description
      // markdown + this markdown must be sanitized before being sent over
      // The slug must also be sent over, can be retrieved from the params of -
      // - the url or document data when it is loaded in
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateGuide({title, description, markdown, slug}))
    navigate(`/guides`)
  }

  if(isLoading){
    return <Spinner/>
  }
     
  if(isError){
    return <h3>Something Went Wrong</h3>
  }

  return (
    <div className='flex flex-col items-center h-fit'>
      <header className='flex items-center bg-primary p-5 rounded-b-3xl text-neutral-content w-full absolute inset-x-0'>
        <h2 className='ml-3 text-2xl'>Edit Guide</h2>
      </header>    
          <form className='flex flex-col lg:w-10/12 md:w-10/12 w-full gap-10 p-3 mt-20 ' onSubmit={onSubmit}>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Title</span>
                <input type="text" placeholder="Enter Title" className="input focus:border-secondary w-full input-bordered" id='title' name='title' defaultValue={guide.title} onChange={(e) => setTitle(e.target.value)} required/>
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Description</span>
                <input type="text" placeholder="Enter Description" className="input focus:border-secondary w-full input-bordered" id='description' name='description' defaultValue={guide.description} onChange={(e) => setDescription(e.target.value)} required/>
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Guide</span>
                {/* Editor */}
                <Editor
                  apiKey={process.env.TINY_MCE_API}
                  onInit={(evt, editor) => editorRef.current = editor}
                  init={{
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                  }}
                  onEditorChange={handleEditorChange}
                  value={markdown}
                  initialValue={guide.markdown}
                />
              </label>
            </div>
            <div className="card-actions flex justify-center">
              <button className="btn btn-primary rounded-lg">Update</button>
            </div>
          </form>
    </div>
  )
}

export default GuideEdit