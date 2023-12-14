import { useState } from "react"
import TopBar from "./TopBar"
import DiceBar from "./DiceBar"

export default function StartGame() {
  const [selectDice,setSelectDice] = useState()
  const [diceNumber,setDiceNumber] = useState(1)
  const [totalScore,setTotalScore] = useState(0)


  const diceNumberGenerate = () => {
    const result = Math.floor(Math.random()*6 + 1)
    setDiceNumber(result)

    if(selectDice == diceNumber){
      setTotalScore(value=>value+5)
    }else{
      setTotalScore(value=>value-1)
    }
  }

  const handleSelect = (index) => {
    setSelectDice(index)
}
  
  
  return (
        <>
          <TopBar selectDice={selectDice} handleSelect={handleSelect}  totalScore={totalScore} />
          <DiceBar diceNumberGenerate={diceNumberGenerate} diceNumber={diceNumber} setTotalScore={setTotalScore} />
        </>
  )
}


