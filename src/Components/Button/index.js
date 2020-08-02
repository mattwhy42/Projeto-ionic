import styled from "styled-components";

const Button = styled.button`
 color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background-color: rgb(35, 40, 51);
    border-width: 1px;
    border-style: solid;
    border-color: white;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;
export default Button