import styled from "styled-components";


export const Container = styled.div`
width: 300px;
height: 100vh;
position: fixed;
top: 0;
right: 0;
background-color: #251618;
right: ${(props) => props.sidebar ? "0" : "-100%"};
animation: showSidebar 0.8s;

@keyframes showSidebar {
    from{
        width: 0;
        opacity: 0;
    }
    to{
      width: 300px;
      opacity: 1;
    }
}

> .close-sidebar{
    position: fixed;
    top: 1rem;
    right: 1rem;
}
`

export const Content = styled.div`
margin-top: 2rem;
width: 100%;
height: 95vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`