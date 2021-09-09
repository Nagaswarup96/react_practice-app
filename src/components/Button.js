import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
color:var(--lightGray);
border: 0.05rem solid gray;
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightGray)"};
color : ${props => props.cart ? "var(--mainYellow)" : "var(--lightGray)"};
border-radius:5px;
padding:0.2rem 0.5rem;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart ? "var(--mainYellow)" : "var(--lightGray)"};
    color: var(--mainWhite);
}
&:focus{
    outline:none;
}
`