import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom' 
import {toast} from 'react-toastify'
import { createGuide, resetGuides } from '../features/guides/guidesSlice'
import Spinner from '../components/Spinner'


function CreateGuide() {

  const {user} = useSelector((state) => state.auth)
  const {isLoading, isError, isSuccess, message} = useSelector((state) => state.guides)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [markdown, setMarkdown] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      if(isError){
          toast.error(message)
      }

      if(isSuccess){
          dispatch(resetGuides())
          navigate('/guides')
      }

      dispatch(resetGuides())
  },[dispatch, isError, isSuccess, navigate, message])

  const handleEditorChange = (e, editor) => {
    const data = editor.getData()
    console.log({ data });
    setMarkdown(data)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createGuide({title, description, markdown}))
  }

  if(isLoading){
    return <Spinner/>
  }
    
  return (
    <div className='flex flex-col items-center h-screen'>
      <header className='flex items-center bg-primary p-5 rounded-b-3xl text-neutral-content w-full absolute inset-x-0'>
        <h2 className='ml-3 text-2xl'>New Guide</h2>
      </header>    
      <div className="card flex flex-col items-center bg-primary rounded-lg shadow-xl mt-80 w-full lg:w-8/12 p-3 border-2">

        <div className="card-body  min-w-full items-center overflow-scroll text-center">
          <form className='flex flex-col lg:w-10/12 md:w-10/12 w-full gap-10 p-3' onSubmit={onSubmit}>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>title</span>
                <input type="text" placeholder="Enter Title" className="input focus:border-secondary w-full input-bordered" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Description</span>
                <input type="text" placeholder="Enter Description" className="input focus:border-secondary w-full input-bordered" id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} required/>
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Guide</span>
                {/* Editor */}
                <textarea placeholder="Write your guide" className="input focus:border-secondary w-full input-bordered" id='markdown' name='markdown' value={markdown} onChange={(e) => setMarkdown(e.target.value)} required> </textarea>
              </label>
            </div>
            <div className="card-actions flex justify-center">
              <button className="btn rounded-lg">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateGuide






