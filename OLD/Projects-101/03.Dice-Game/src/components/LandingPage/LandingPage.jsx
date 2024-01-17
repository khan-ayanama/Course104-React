import styled from 'styled-components'
import Button from '../Button/Button';

const LandingPage  = ({toggle}) => {
    return (
        <Container>
            <div className="image-container">
                <img src="images/dices.png" alt="" />
            </div>
            <div className="container-text">
                <h1>Dice Game</h1>
                <Button btn_text="Play Now" event={toggle}/>
            </div>
        </Container>
    )
}

export default LandingPage;

const Container = styled.div`
    /* border: 2px solid red; */
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-around;

    .container-text{
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .container-text h1{
        font-size: 6rem;
        font-size: 96px;
        white-space: nowrap;
    }
`