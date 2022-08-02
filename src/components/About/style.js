import styled from "styled-components";


export const Section = styled.section`
width: 100%;
height: 100vh;
background-color: #2c1f31;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width:960px) {
    flex-direction: column;
    justify-content: space-around;
 
}
`

export const Content = styled.div`
width: 50%;
display: flex;
flex-direction: column;


`
export const Experience = styled.div`
 width: 350px;
 height: 400px;
 background-color: #28271d;
 border-radius: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 h1{
    font-size: 8rem;
    color: #ffe600;
 }
 h3{
    color: #fff;
 }

 @media (max-width:960px) {
    width: 170px;
    height: 210px;
    h1{
        font-size: 3rem;
    }
    h3{
        font-size: 1rem;
    }
 }

`
export const Rect = styled.div`
width: 270px;
height: 100px;
border-radius: 14px;
background-color: #2d2b21;
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
margin-left:15rem ;
h1{
    font-size: 2rem;
    color: #59c378;
    margin-right: 1rem;
}
p{
    color: #fff;
}
@media (max-width:960px) {
    width: 170px;
    height: 80px;
     margin-right:6rem ;
    h1{
        font-size: 1rem;
    }
}
`

export const Gruop_Box = styled.div`
width: 50%;
display: grid;

grid-template-columns: repeat(3,3fr);
h1{
    font-size: 2rem;
    color: white;
}
p{
    font-size:2rem;
    color: #fff;
}
@media (max-width:960px) {
    grid-template-columns: repeat(2,2fr);
    grid-template-rows: repeat(2,2fr);
    h1{
        font-size: 1rem;
    }
  
   p{
         font-size: 15px;
    }
}
`

export const Content_Box = styled.div`
width: 60%;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
h2{
    font-size: 1rem;
    color: #fff;
    text-align: center;
}
p{
    color: #fff;
    text-align: center;
    font-size: 16px;
}

`

export const Box = styled.div`
margin-top: 10px;
width: 120px;
height: 120px;
background-color: #1f1e1d;
border-radius: 14px;
display: flex;
margin-right: 1rem;
align-items: center;
justify-content: center;
flex-direction: column;
h2{
    font-size: 2rem;
    color: #fff;
}
&.figma{
    border: 1px solid  #ffe600;
    color: #ffe600;
}
&.Sketch{
    border: 1px solid #59c378;
    color: #59c378;
}
&.photoshop{
    border: 1px solid #dd564f;
    color: #dd564f;
}
&.illustrator{
    border: 1px solid  #9e6210;
    color: #9e6210;
}
&.wordpress{
    border: 1px solid #05a9ff;
    color: #05a9ff;
}
&.react{
    border: 1px solid #6c09a8;
    color: #6c09a8;
}
@media (max-width:960px) {
    width: 100px;
    width: 100px;
   
}
`