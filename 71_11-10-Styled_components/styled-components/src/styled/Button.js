import styled,{css} from "styled-components";

export const Button = styled.button`
    background: #ccc;
    text-transformer: uppercase;
    border: 1 px solid black;
    font-size: 1rem;
    border-radius: 5px;
    padding: 5px 15px;
    &:hover{
        background: black;
        cursor: pointer;
        color: white;
    }
    ${props =>props.primary && css `
        background: blue;
        color:white;
    `}
`

export const SuccessButton = styled(Button)`
    background: green;
    color: #FFF
`


