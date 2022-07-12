import React from 'react'
import {FaPencilAlt, FaEye, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'



function GuideTableItem({guide, deleteSelectedGuide}) {
  return (
    <>
            <tr className='hover' key={guide._id}>
                <td>{guide.title}</td>
                <td>{guide.author}</td>
                <td>{guide.description}</td>
                <td>
                <span className='flex gap-3'>
                    <Link to={`/guide/${guide.slug}/edit`}>
                        <button className="tooltip tooltip-accent tooltip-bottom mr-2 text-xl" data-tip="Edit"><FaPencilAlt/></button>
                    </Link>
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