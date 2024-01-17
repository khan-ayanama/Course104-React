import styled from "styled-components";

const Rules = ( )=> {
    return (
        <Container>
            <h3>How to Play Dice Game</h3>
            <ul>
                <li>Selct Any Number</li>
                <li>Click on dice Image</li>
                <li>After click on dice, If selected number is equal to the points on dice, Congrats!! You've won otherwise Try Again</li>
            </ul>
        </Container>
    )
}

export default Rules;

const Container = styled.div`
    background-color: lightgoldenrodyellow;
    width: 80%;
    text-align: center;
    padding: 1em;
    h3{
        font-size: 1.5rem;
        margin: 1em 0;
    }
    li{
        list-style-type: none;
        padding-bottom: 0.5em;
        font-size: 1.4rem;
    }
`