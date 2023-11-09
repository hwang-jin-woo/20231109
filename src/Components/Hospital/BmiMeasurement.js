import React, {useState} from 'react'

import './css/bmi.css'

export function BmiMeasurement() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')


  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('키와 몸무게를 입력하세요')
    } else {
      let bmi = (weight / (height * height)*10000 )
      setBmi(bmi.toFixed(2))

      // Logic for message

      if (bmi < 25) {
        setMessage('당신은 저체중입니다.')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('당신은 정상체중입니다.')
      } else {
        setMessage('당신은 과제중입니다.')
      }
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return <>
    <div className="container">
      <div className='bmi'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
          <div>
            <label>키 </label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
            <label>몸무게 </label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  
  </>
}

