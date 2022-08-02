import styled from "styled-components";


export const Section = styled.section`
height: 100vh;
width: 100%;
background-color: #211b1b;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: left;
h1{
    font-size: 1.5rem;
    color: #fff;
    text-align: left;
}

`

export const Work = styled.div`
margin-top: 1rem;
width: 90%;
height: 120px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #282828;
border-radius: 14px;

padding: 0 12px;
color: #fff;
>a{
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 5px;
    &:hover{
        color: #ffe600;
        transition-duration: .8s;
    }
}
@media (max-width:960px) {
    height: 100px;
    width: 85%;
    img{
      width: 60px;
     height: 60px;
  
    }
    h1{
        font-size: 13px;
    }
    h4{
        font-size: 12px;
    }
    a{
        font-size: 12px;
    }
}

`