import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import error from '../assets/error.svg'

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
      
      <Container onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
        {errors.firstName && 
          <Img src={error}/>
      }
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              required: { value: true, message: "First Name cannot be empty" },
            })}
            style={errors.firstName && {border:"1px solid #FF7979"}}
          />
          {errors.firstName && (
            <p styled={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </InputBox>
        <InputBox>
        {errors.lastName && 
          <Img src={error}/>
      }
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: { value: true, message: "Last Name cannot be empty" },
            })}
            style={errors.lastName && {border:"1px solid #FF7979"}}
          />
          {errors.lastName && (
            <p styled={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </InputBox>
        <InputBox>
        {errors.email && 
          <Img src={error}/>
      }
          <input
            type="email"
            placeholder="Email Adress"
            {...register("email", {
              required: {
                value: true,
                message: "Looks like this is not an email",
              },
            })}
            style={errors.email && {border:"1px solid #FF7979"}}
          />
          {errors.email && (
            <p styled={{ color: "red" }}>{errors.email.message}</p>
          )}
        </InputBox>
        <InputBox>
        {errors.password && 
          <Img src={error}/>
      }
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password cannot be empty" },
            })}
            style={errors.password && {border:"1px solid #FF7979"}}
          />
          {errors.password && (
            <p styled={{ color: "red" }}>{errors.password.message}</p>
          )}
        </InputBox>
        <Btn type="submit">CLAIM YOUR FREE TRIAL</Btn>
        <TxtBox>By clicking the button, you are agreeing to our <Span>Terms and Services</Span></TxtBox>
      </Container>
  );
}

const Container = styled.form`
  width: 327px;
  background-color:white;
  border:none;
  margin: auto;
  border-radius:10px;
  display: flex;
  gap:16px;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;

  @media screen and (min-width:768px){
width:100%;


}
`;
const InputBox = styled.div`
  width: 279px;
  height: 56px;
  margin-top:19px;
  position:relative;
  outline: none;

  @media screen and (min-width:768px){
width:450px;
height:56px;


}
`;

const Img = styled.img`
  position:absolute;
  
  top:16px;
  right:16px;
`
const Icon = styled.span`
  position:absolute;
  top:0px;
  left:10px;
  color:white;
  z-index:10;
`
const Btn = styled.button`
background: #38CC8B;
box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
border-radius: 5px;
width:279px;
height:56px;
border:none;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 26px;
text-align: center;
letter-spacing: 1px;
margin-top:16px;
color: #FFFFFF;
cursor:pointer;

@media screen and (min-width:768px){
width:460px;
height:56px;


}

`
const TxtBox = styled.div`
  width:249px;
  height:42px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 21px;

text-align: center;
margin-top:-8px;
margin-bottom:24px;
color: #BAB7D4;

@media screen and (min-width:768px){
width:376px;
height:26px;
font-size: 11px;
line-height: 26px;


}
`
const Span = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color:#FF7979;
    @media screen and (min-width:768px){

font-size: 11px;
line-height: 26px;


}
`