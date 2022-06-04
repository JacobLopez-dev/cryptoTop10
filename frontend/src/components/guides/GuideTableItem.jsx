import React from 'react'
import {useSelector} from 'react-redux'
import {FaPencilAlt, FaEye, FaTrash} from 'react-icons/fa'


function GuideTableItem() {
    const {guides} = useSelector((state) => state.guides)
  return (
    <>
        {guides.map(guide => (
            <tr className='hover' key={guide._id}>
                <td>{guide.title}</td>
                <td>{guide.author}</td>
                <td>{guide.description}</td>
                <td>
                <span className='flex gap-3'>
                    <button className="tooltip tooltip-accent tooltip-bottom mr-2" data-tip="Edit"><FaPencilAlt/></button>
                    <button className="tooltip tooltip-accent tooltip-bottom mr-2" data-tip="View"><FaEye/></button>
                    <button className="tooltip tooltip-accent tooltip-bottom mr-2" data-tip="delete"><FaTrash/></button>
                </span>
                </td>
            </tr>
        ))}
    </>
  )
}

export default GuideTableItem