import styled from "styled-components";


export const Section = styled.section`
height: 100vh;
background-color: #131313;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
`
export const Form = styled.form`
width: 60%;
height: 400px;
background-color: #242424;
border-radius: 14px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
> button{
    border: none;
    background-color: #59c378;
    padding:0.55rem;
    width: 140px;
    border-radius: 14px;
    margin-bottom: 1rem;
}
`
export const Box_Input = styled.div`
width: 100%;
display: flex;
align-items:center;
justify-content: center;
margin: auto;
>input{
    width: 40%;
    border-bottom:1px solid #ccc;
    outline: none;
    border-top: none;
    border-right: none;
    background-color: transparent;
    margin-right: 1rem;
    font-size: 1rem;
}
> textarea{

    width: 80%;
    height: 200px;
    outline: none;
    background-color: #131313;
}

`