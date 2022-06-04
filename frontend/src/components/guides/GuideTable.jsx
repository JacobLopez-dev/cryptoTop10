import React from 'react'
import GuideTableItem from './GuideTableItem'

function GuideTable() {
  return (
    <div className="overflow-x-auto w-10/12 grid mt-20">
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
        <GuideTableItem/>
      </tbody>
      </table>
    </div>
  )
}

export default GuideTable