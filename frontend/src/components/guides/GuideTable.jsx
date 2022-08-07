import React from 'react'
import GuideTableItem from './GuideTableItem'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { deleteGuide} from '../../features/guides/guidesSlice'

function GuideTable() {
  const {guides, isError, message, isSuccess} = useSelector((state) => state.guides)

  const dispatch = useDispatch()

  const deleteSelectedGuide = (slug) => {
    guides.filter(guide => guide.slug === slug)

    dispatch(deleteGuide(slug))

    if(isSuccess){
        toast.info(slug+'deleted') 
    }

    if(isError){
        toast.error(message)
    }
}

  return (
    <div className="overflow-x-auto grid">
    <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          guides.map(guide => <GuideTableItem key={guide._id} guide={guide} deleteSelectedGuide={deleteSelectedGuide}/>)
        }
      </tbody>
      </table>
    </div>
  )
}

export default GuideTable