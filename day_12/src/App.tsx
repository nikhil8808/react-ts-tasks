import { useState, useEffect, useRef, useMemo } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState<string>("")
  const [height, setHeight] = useState<string>("")

  const calculateBMI = useMemo(() => {
    let input_height = parseFloat(height); // assuming user inputs in feet
    let input_weight = parseFloat(weight); // kg

    if (!input_height || input_height <= 0 || !input_weight || input_weight <= 0) return 0;

    // convert height from feet to meters if needed
    input_height = input_height * 0.3048;

    const bmi = input_weight / (input_height * input_height);
    return parseFloat(bmi.toFixed(2)); // 2 decimals
  }, [weight, height]);

  const getBMICategory = (bmi: number): string => {
    if (bmi === 0) return "Enter valid weight and height";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
  };



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '40%',border:'1px solid ',padding:'2rem',borderRadius:'1rem'}}>
          <h1>BMI Calculator</h1>
          <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
            <label htmlFor="">Weight:</label>
            <input type="text" placeholder='Enter Weight' value={weight} onChange={(e) => {

              setWeight(e?.target?.value)


            }

            }
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
            <label htmlFor="">Height:</label>

            <input type="text" placeholder='Enter Height' value={height}
              onChange={(e) => {

                setHeight(e?.target?.value)


              }

              }

            />
          </div>

          <h5>BMI Result :</h5>
          <h5>{getBMICategory(calculateBMI)}</h5>

        </div>

      </div>

    </>
  )
}

export default App
