import React, { useState } from 'react';
import { styled } from "styled-components";
import axios from 'axios';


const SignIN = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignin = async() => {
        try {
            const response = await axios.post('http://localhost:5000/api/login/signin', {
                username, 
                password
            });
        console.log(response);
        } catch (error) {
           console.log(error); 
        }
        
    }

  return (
    <Wrapper>
        <Section>

        <Header>Sign In</Header>

        <Container>
                <Group>
                    <Label>Username</Label>
                    <Input type="text" value={username} onChange={ (e) => setUsername(e.target.value)} required></Input>
                </Group>

                <Group>
                    <Label>Password</Label>
                    <Input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}></Input>
                </Group>

                <Submit onClick={ handleSignin }>SignIn</Submit>
            </Container>

        </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 170px;
    color: white;
`;

const Section = styled.div`
    border: 2px solid white;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 10px; 
`;

const Container = styled.div`
    width: 250px;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px 0;
`;

const Label = styled.label`
    padding: 4px 0;
`;

const Input = styled.input`
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid white;
    outline: none;
    color: white;
`;

const Submit = styled.button`
    padding: 10px 15px;
    margin: 8px 0;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    cursor: pointer;
`;

export default SignIN