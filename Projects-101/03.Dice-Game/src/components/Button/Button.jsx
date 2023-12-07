import styled from "styled-components";

const Button = ({btn_text,event}) => {
    return (
        <BTN onClick={event}>{btn_text}</BTN>
    )
}

export default Button;

const BTN = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    border: transparent;
    min-width: 220px;
    font-size: 1.6rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: black;
        background-color: white;
        border: 1px solid black;
        transition: 0.2s ease-in-out;
    }
`