import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom' 
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'


function CreateGuide() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
  return (
    <div>
    <h1>new guide</h1>
    </div>
  )
}

export default CreateGuide