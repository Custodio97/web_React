import styled from "styled-components";

export const Container = styled.div`
margin: 14px 0;
width: 90%;
background-color: #41b362;
display: flex;
align-items: center;
font-size: 22px;
border-radius: 14px;
cursor: pointer;
padding: 0.58rem;
> svg{
    
    margin: 0  14px;
    color: #fff;
}
> a{
    text-decoration: none;
    color: #fff;
    
}
&:hover{
    background-color: #ff4155;
   transition-duration: 0.9s;
}
`