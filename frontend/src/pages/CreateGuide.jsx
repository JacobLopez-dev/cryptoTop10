import {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom' 
import {toast} from 'react-toastify'
import { createGuide, resetGuides } from '../features/guides/guidesSlice'
import { Editor } from '@tinymce/tinymce-react';
import Spinner from '../components/Spinner'


function CreateGuide() {

  // const {user} = useSelector((state) => state.auth)
  const {isLoading, isError, isSuccess, message} = useSelector((state) => state.guides)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [markdown, setMarkdown] = useState('')
  const [coverImage, setCoverImage] = useState('')

  const editorRef = useRef(null);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      return () => {
          if(isSuccess) {
              dispatch(resetGuides())
          }
          console.log('create guide page reset')
      }
    }, [dispatch, isSuccess])

    useEffect(() => {
      if(isError){
          toast.error(message)
      }

      if(isSuccess){
          dispatch(resetGuides())
          navigate('/guides')
      }
  },[dispatch, isError, isSuccess, navigate, message])


  const handleEditorChange = () => {
    let content = editorRef.current.getContent()
    console.log(content)
    setMarkdown(content)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("markdown", markdown);
    formData.append("coverImage", coverImage)
    console.log({title, description, markdown, coverImage})
    dispatch(createGuide(formData))
  }

  if(isLoading){
    return <Spinner/>
  }
    
  return (
    <div className='flex flex-col items-center h-fit'>
      <header className='flex items-center bg-primary p-5 rounded-b-3xl text-neutral-content w-full absolute inset-x-0'>
        <h2 className='ml-3 text-2xl'>New Guide</h2>
      </header>    
          <form className='flex flex-col lg:w-10/12 md:w-10/12 w-full gap-10 p-3 mt-20 ' onSubmit={onSubmit}>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Title</span>
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
                <span className='bg-secondary text-white'>Image</span>
                <input type="file" onChange={(e) => setCoverImage(e.target.files[0])} required/>
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Guide</span>
                {/* Editor */}
                <Editor
                  apiKey={'jcgbnw8hcipbythv06fis6lj85r7qztysed4csnub713ibjl'}
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
                />
              </label>
            </div>
            <div className="card-actions flex justify-center">
              <button className="btn btn-primary rounded-lg">Post</button>
            </div>
          </form>
    </div>
  )
}

export default CreateGuide






