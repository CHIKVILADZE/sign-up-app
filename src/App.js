import styled from 'styled-components'
import './App.css';
import Form from './componentss/Form'
import mobbackground from './assets/mobbackground.png'
import background from './assets/background.png'

function App() {
  return (
    <Main>
      <Info>
        <Title>Learn to code by watching others</Title>
          <Text>See how experienced developers solve problems
              in real-time. Watching scripted tutorials is great,
              but understanding how developers think is invaluable.
          </Text>   
      </Info>
      <FormBox>
        <Button><Span>Try it free 7 days </Span>then $20/mo. thereafter</Button>
        <Form/>
      </FormBox>
    
    </Main>
  );
}

export default App;

const Main = styled.div`
width:375px;
height:1204px;
border:1px solid red;
margin:auto;
background-image:url(${mobbackground});
background-color:#FF7979;

@media screen and (min-width:768px){
  width:100%;
  height:800px;
  display:flex;
  gap:45px;
  flex-direction: row;
  background-image:url(${background});

}
`
const Info = styled.div`
height:226px;
width:327px;

margin:auto;
display:flex;
margin-top:88px;
flex-direction: column;
gap:16px;

@media screen and (min-width:768px){
  width:525px;
  height:220px;
  margin-top:290px;
  margin-left:165px;
}
`

const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.291667px;
color: white;

@media screen and (min-width:768px){
  font-weight: 700;
  font-size: 50px;
  line-height: 55px;
 
}
`

const Text = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
text-align: center;

color: white;
@media screen and (min-width:768px){
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
}
`

const FormBox = styled.div`
width:327px;

margin:auto;
margin-top:64px;
display:flex;
flex-direction: column;
gap:24px;

@media screen and (min-width:768px){
width:540px;
margin-left:-200px;
}
`
const Button = styled.button`
width:327px;
height:88px;
background-color:#5E54A4;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 26px;
border-radius:10px;
border:none;
text-align: center;
letter-spacing: 0.267857px;
cursor:pointer;
color: #FFFFFF;

@media screen and (min-width:768px){
width:100%;
height:60px;
}

`
const Span = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 15px;
`