import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'






export default function Landing(props) {
	const [state, setstate] = useState('');
	const [redirect, setRedirect] = useState(false);
	return !redirect ? (
		<ThemeProvider theme={theme}>


			<H1>Join or Create a Room!</H1>
			<DivContainer>



				<DivInput>


					<Input onChange={e => setstate(e.target.value)} type='text' placeholder='Create a Room' />

					<Button onClick={() => setRedirect(!redirect)}>Create</Button>
				</DivInput>

				<br />
				<DivInput>


					<Input onChange={e => setstate(e.target.value)} type='text' placeholder='Join a Room' />

					<Button onClick={() => setRedirect(!redirect)}>Join  </Button>
				</DivInput>

			</DivContainer>


		</ThemeProvider>

	) : (
			<Redirect to={`/room/${state}`} />
		);
}


//! Styled Components

const DivContainer = styled.div`
	
	width: 30%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

`
const DivInput = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	
`


const theme = {
	primary: "#6495ED",
	secondary: '#9ACD32',
	font: 'sans-serif',
}

const H1 = styled.h1`
	font-size: 3rem;
	font-family: ${props => props.theme.font};
	color: darkgray;
`

const Button = styled.button`
	text-transform: uppercase;
  font-size: 11px;
	font-weight: 600;
	font-family: ${props => props.theme.font};
	border: none;
	width: 20%;
	background: ${props => props.theme.primary};
	color: #fff;
	line-height: 0;
	padding: 0;
	border-radius: 20px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;

  cursor: pointer;
	&:hover{
		background: ${ props => props.theme.secondary}
	}

`


const Input = styled.input`
	margin:15px 0;
	padding:15px 10px;
	width:60%;
	outline:none;
	border:1px solid #bbb;
	border-radius:20px;
	display:inline-block;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
	-webkit-transition:0.2s ease all;
	-moz-transition:0.2s ease all;
	-ms-transition:0.2s ease all;
	-o-transition:0.2s ease all;
	transition:0.2s ease all;

	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;

	::placeholder{
		font-size: 15px;
		font-weight: 600;
	}

	&:focus{
		background:${props => props.theme.primary};
	}

`





