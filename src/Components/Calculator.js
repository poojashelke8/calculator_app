import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import Buttons from './Buttons'
import Screen from './Screen'
import ButtonBox from './ButtonBox'
import "../Components/calculator.css"
import { add,subtract } from '../features/calculatorSlice'


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

const Calculator = () => {

  const dispatch = useDispatch()
  const result = useSelector((state) =>state.calculator.res )
  return (
    <div className='wrapper'>
        
        <Screen value={result}/>
        {/* <Screen value=0 /> */}
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Buttons
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  if(btn==="+"){
                    dispatch(add())
                    }else if(btn==="-"){
                      dispatch(subtract())
                      } else
                        // console.log("button clicked: ", btn);


                  
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </div>
    
  )
}

export default Calculator