import styled from 'styled-components'

export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const Nav = styled.nav`
background-color: rgb(75, 43, 191); 
`
 
export const Container = styled.div`
background-color: #333;
padding: 10px 20% 10px 20px;
margin: 15px 0;
border-radius: 5px;
overflow: hidden;
position: relative;
box-shadow: 0px 2px 0px #222;
`

export const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
`
export const Img = styled.img`
position: absolute;
height: 150%;
top: 30%;
right: -60px;
`

export const H1 = styled.h1`
  color: #eee;
  text-align: center;
`
export const H2 = styled.h2`
  color: #eee;
  margin: 10px 0;

  &:hover{
  color: rgb(135, 135, 135);
  }
`
export const Pwrap = styled.p`
  line-height: 26px;
  color: #eee;
`

export const P = styled.p`
  color: #eee;
  text-align: center;
  margin: 10px 0;
`
export const Update = styled.div`
display: none;
marginTop: '20px';
`
export const Button = styled.button`
background: #eee;
padding: 5px 15px;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
margin: 10px 5px;
`

export const Textarea = styled.textarea`
resize: horizontal;
max-width: 90%;
min-width: 20%;` 