import styled from "styled-components"

const TopBar = ({selectDice,handleSelect,totalScore}) => {
    const num = [1,2,3,4,5,6]

    return (
        <Container>
            <div className="score">
                <h1>{totalScore}</h1>
                <p>Total Score</p>
            </div>
            <div className="guess">
                {selectDice==undefined?<h3 className="warning">Please Select the number</h3>:''}
                <div className="number-options">
                    {num.map((number,i)=>{
                        return <span key={i} className={`number ${selectDice === i?"selected":""}`} onClick={()=>handleSelect(i)} >{number}</span>
                    })}
                </div>
                <h3>Select the Number from Above</h3>
            </div>
    </Container>
    )
}

export default TopBar;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
    .score h1{
        font-size: 5rem;
        text-align: center;
    }

    .score p{
        font-weight: bold;
    }
    .number-options{
        display: flex;
        gap: 2em;
        align-items: center;
    }
    .guess{
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }
    .guess h3{
        text-align: end;
        width: 100%;
    }
    .number{
        border: 1px solid black;
        font-size: 3rem;
        width: 5rem;
        text-align: center;
        align-self: center;
        cursor: pointer;
    }

    h3.warning{
        color: red;
        /* color: transparent; */
    }
    .selected{
        background-color: black;
        color: white;
        border: transparent;
    }
`