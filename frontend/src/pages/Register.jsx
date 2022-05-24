import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaRegUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {

  const[formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2: '',
  })

  const {name, email, password, password2} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message, {
        theme: 'dark'
      })
    }

    if(isSuccess || user){
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

    if(password !== password2 ){
      toast.error('passwords do not match', {
        theme: 'dark'
      })
    }else{
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner/>
  }
  
  return (
    <div className='p-3 flex flex-col items-center'>
      <div className="card flex flex-col items-center bg-base-200 shadow-xl w-full lg:w-6/12 p-3">

        <section className='heading flex flex-col justify-center max-w-fit'>
          <h1 className='text-3xl flex justify-center'>
            <FaRegUserCircle className='mr-1 '/> Register
          </h1>
          <p>Create your account here</p>
        </section>

        <div className="card-body  min-w-full items-center -mt-10 text-center">

          <form className='flex flex-col lg:w-8/12 md:w-10/12 w-full gap-10 p-3' onSubmit={onSubmit}>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Name</span>
                <input type="text" placeholder="Enter your name" className="input focus:border-secondary w-full input-bordered" id='name' name='name' value={name} onChange={onChange} required/>
              </label>
            </div>

            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Email</span>
                <input type="text" placeholder="Enter your email" className="input focus:border-secondary w-full input-bordered" id='email' name='email' value={email} onChange={onChange} required/>
              </label>
            </div>

            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Password</span>
                <input type="password" placeholder="Enter your password" className="input focus:border-secondary w-full input-bordered" autoComplete="on" id='password' name='password' value={password} onChange={onChange} required/>
              </label>
            </div>

            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className='bg-secondary text-white'>Confrim</span>
                <input type="password" placeholder="Confirm passowrde" className="input focus:border-secondary w-full input-bordered" autoComplete="on" id='password2' name='password2' value={password2} onChange={onChange} required/>

              </label>
            </div>
            <div className="card-actions flex justify-center">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="card-actions flex justify-center">
              <Link to='/login'>
                <p className='hover:text-secondary-focus'>Already have an account?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

