import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FaPencilAlt, FaEye, FaTrash} from 'react-icons/fa'
import { deleteGuide, getGuides } from '../../features/guides/guidesSlice'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'



function GuideTableItem({guide, deleteSelectedGuide}) {
  return (
    <>
            <tr className='hover' key={guide._id}>
                <td>{guide.title}</td>
                <td>{guide.author}</td>
                <td>{guide.description}</td>
                <td>
                <span className='flex gap-3'>
                    <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="Edit"><FaPencilAlt/></button>
                    <Link to={`/guide/${guide.slug}`}>
                        <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="View"><FaEye/></button>
                    </Link>
                    <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="delete" onClick={()=> deleteSelectedGuide(guide.slug)}><FaTrash/></button>
                </span>
                </td>
            </tr>
    </>
  )
}
export default GuideTableItem