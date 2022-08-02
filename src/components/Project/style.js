import styled from "styled-components";


export const Section = styled.section`
height: 100vh;
background-color: #212120;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #fff;
`
export const Text = styled.div`
margin-top: 5rem;
width: 100%;
display: flex;
flex-direction: column;
h1{
    font-size: 2rem;
}
p{
    font-size: 20px;
    margin-bottom: 1rem;
}
@media (max-width:960px) {
    h1{
        font-size: 1.25rem;
    }
    p{
        font-size: 16px;
        margin-bottom:  10px;
    }
}
`
export const Container = styled.div`

width: 100%;
display: flex;
align-items: center;
justify-content:space-between;
@media (max-width:960px) {
    justify-content: center;
    flex-direction: column;

}
`

export const Content = styled.div`
width: 270px;
height: 400px;
margin-right: 1rem;
img{
    width: 100%;
    &:hover{
       transform: translateY(-2px);
    }
    
}
@media (max-width:960px) {
    width: 200px;
    height: 310px;
}
@media (max-width:400px) {
    width: 100px;
    height: 170px;
}
`