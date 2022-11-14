import { useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // Calculate ratings average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length
  
  //Show average to 1 decimal place and use regex to clip off any trailing 0's
  average=average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stat'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats