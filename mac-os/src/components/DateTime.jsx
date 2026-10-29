import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      const dayName = days[now.getDay()]
      const monthName = months[now.getMonth()]
      const date = now.getDate()
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      //* targetLength → Final string ki total length kitni honi chahiye.
     //* padString (optional) → Kaunsa character ya string add karna hai (default: space " ").
      const ampm = hours >= 12 ? 'PM' : 'AM'
      
      hours = hours % 12 || 12
      
      setDateTime(`${dayName} ${monthName} ${date} ${hours}:${minutes} ${ampm}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {dateTime}
    </div>
  )
}

export default DateTime
