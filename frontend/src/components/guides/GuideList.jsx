import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function GuideList() {
    const {guides} = useSelector((state) => state.guides)

  return (
    <>
        {guides.map(guide => (
            <div key={guide._id}>
                <h1>{guide.title}</h1>
            </div>
        ))}
    </>
  )
}

export default GuideList