import styled from "styled-components";


export const Section = styled.section`
width: 100%;
height: 100vh;
background-color: #262520;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
    color: #fff;
    font-size: 2rem;
}
p{
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
}
@media (max-width:960px) {
    p{
        font-size:15px;
        text-align: center;
    }
    h1{
        font-size: 1rem;
    }
}
`

export const Content_Box = styled.div`
display: grid;
align-items: center;
grid-template-columns: repeat(3,1fr);
@media (max-width:960px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
`

export const Box = styled.div`
width: 300px;
height:400px;
border-radius: 14px;
background-color: #232221;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 1rem;
margin-right: 1rem;
gap: 2rem;
> span{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color:#373737;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
       background-color: #59c378;
       transition-duration: 0.8s;
    }
    svg{
        width: 25px;
        height: 25px;
        color: #ffe600;
    }
    
}
@media (max-width:960px) {
    width: 150px;
    height: 250px;
    gap: 5px;
    span{
       width: 50px;
       height: 50px;
       svg{
          width: 16px;
          height: 16px;
       }
    }
    p{
      font-size: 13px;
    }
}
`