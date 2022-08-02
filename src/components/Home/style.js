import styled from "styled-components";


export const Section = styled.div`
width: 100%;
height: 100vh;
background-color: #42261b;
display: flex;
align-items:center;
justify-content:center;

 img{
 width: 35%;
 border-radius: 50%;
}
@media (max-width:960px) {

    flex-direction: column-reverse;
    img{
        width: 40%;
    }
}
@media (max-width:400px) {
    img{
        width: 60%;
    }
}
`
export const Content = styled.div`
width: 40%;
display: flex;
flex-direction: column;
>h2{
    font-size: 3rem;
    color: #ffe600;
    margin-bottom: 1rem;
}
>h1{
    font-size: 5rem;
    color: #fff;
    margin: 1.5rem 0;
}
> h3{
    color: #59c378;
    margin-bottom: 1rem 0;
}
p{
    font-size: 1rem;
    line-height: 2rem;
    color: #fff;
}
button{
    padding: 0.90rem;
    width: 155px;
    background-color: #59c378;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
       margin-left: 2px;
       color: #fff;
    }
    cursor: pointer;
    a{
        text-decoration: none;
        font-size: 1rem;
        color: #fff;
    
    }
}
button:hover{
    transform: translateY(-2px);
    transition-duration:0.8s ;
}
@media (max-width:960px) {
        h2{
        font-size:2rem;
        margin-bottom: 10px;
    }
 h1{
    font-size: 2.5rem;
    margin: 10px 0;
 }  
 p{
    font-size: 1rem;
    line-height: 20px;
 } 
 button{
    width: 125px;
 }
}
@media (max-width:400px) {
    h2{
        font-size: 0.90rem;
        margin-bottom: 10px;
    }
 h1{
    font-size: 1rem;
    margin: 10px 0;
 }  
 p{
    font-size: 15px;
    line-height: 20px;
 } 
 button{
    width: 125px;
 }
}
` 