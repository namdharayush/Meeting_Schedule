import React, { useState } from 'react'


const SCHEDULED_TIME = ['1:30pm - 2:15pm', '2:00pm - 2:45pm', '6:30pm - 7:15pm', '8:00pm - 8:45pm', '8:30pm - 9:15pm', '9:00pm - 9:45pm', '9:30pm - 10:15pm']

function Scheduled_Time({handleEvent}) {

  const [sctime, setScTime] = useState(false)
  let a = new Date().toLocaleTimeString().split(':');
  a = a[0] + a[1]

  const handleButtonClick = (val) => {
    setScTime(val)
  }

  return (
    <>
      {
        SCHEDULED_TIME.map(time => {
          return (
            <div key={time}>
              <button  onClick={() => handleButtonClick(time)} className={`${time === sctime ? 'custom_btn_left_next' : 'custom_btn'}`} 
              // style={{display : a > time.split("-")[0].split(':')[0]+time.split("-")[0].split(':')[1] ? 'none' : ''}}
              type='button' >
                {
                  time.split("-")[0]
                }
              </button>
              {
                sctime === time && <button onClick={()=>handleEvent(time)}  type='submit' className={`${time === sctime ? 'custom_btn_right_next' : 'd-none'}`}>Next</button>
              }
            </div>
          )
        })
      }

    </>

  )
}

export default Scheduled_Time