import { useState } from "react";

import styled from "styled-components";
import Button from "../Button/Button";
import Rules from "./Rules";

const DiceBar = ({diceNumber,diceNumberGenerate,setTotalScore}) =>{
    const [isRuleVisible,setRuleVisible] = useState(false)
    const rulesInfo = ()=>{
        setRuleVisible(value=>!value)
    }
    const resetScore = () =>{
        setTotalScore(0)
    }
    

    return(
        <Container>
            <div className="img-section">
                <img src={`/images/dice/dice_${diceNumber}.png`} alt="Dice" onClick={diceNumberGenerate}/>
            </div>
            <div className="dice-info">
                <h3>Click on Dice to Roll</h3>
                <div className="dice-btn">
                    <Button btn_text={'Reset Score'} event={resetScore}/>
                    <Button btn_text={'Show Rules'} event={rulesInfo}/>
                </div>
            </div>
            {isRuleVisible?<Rules/>:''}
        </Container>
    )
}

export default DiceBar;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    justify-content: center;
    align-items: center;
    .dice-info{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .dice-btn{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
`