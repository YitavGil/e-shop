import { useState } from 'react'

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const calculateTimeLeft = () => {
    
  }

  return (
    <div>CountDown</div>
  )
}

export default CountDown