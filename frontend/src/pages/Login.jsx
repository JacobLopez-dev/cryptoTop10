import {useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom' 
import {FaSignInAlt} from 'react-icons/fa'
import {login, reset} from '../features/auth/authSlice'
import {useSelector, useDispatch} from 'react-redux'

function Login() {

  const[formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const {email, password} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message, {
        theme: 'dark'
      })
    }

    if(isSuccess && user.isAdmin){
      navigate('/admin-dashboard')
    }

    if(isSuccess && user && !user.isAdmin){
      navigate('/')
    }

    dispatch(reset)
  },[isError, message, dispatch, isSuccess, navigate, user])


  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div className='p-3 flex flex-col items-center'>
      <div className="card flex flex-col items-center bg-base-200 shadow-xl w-full lg:w-6/12 p-3">

        <section className='heading flex flex-col justify-center max-w-fit'>
          <h1 className='text-3xl flex justify-center'>
            <FaSignInAlt className='mr-1 '/> Login
          </h1>
          <p>Create your account here</p>
        </section>

        <div className="card-body  min-w-full items-center -mt-10 text-center">

          <form className='flex flex-col lg:w-6/12 md:w-8/12 w-full gap-10 p-3' onSubmit={onSubmit}>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Email</span>
                <input type="text" placeholder="Enter your email" className="input focus:border-secondary w-full input-bordered" id='email' name='email' value={email} onChange={onChange} required/>
              </label>
            </div>

            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Password</span>
                <input type="password" placeholder="Enter your password" className="input focus:border-secondary w-full input-bordered" id='password' name='password' autoComplete='on' value={password} onChange={onChange} required/>
              </label>
            </div>

            <div className="card-actions flex justify-center">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="card-actions flex justify-center">
              <Link to='/register'>
                <p className='hover:text-secondary-focus'>need an account?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

