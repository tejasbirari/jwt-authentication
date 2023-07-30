import React, { useState } from "react";
import { styled } from "styled-components";
import axios from 'axios';

const SignUP = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkedPassword, setCheckedPassword] = useState('');

    const checkPassword = () => {
        if( password === confirmPassword){
            setCheckedPassword(password)
        } else {
            alert("Password does not match");
        }
    }

    const handleSignup = async() => {
        try {
            checkPassword();
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                email,
                checkedPassword
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Wrapper>

        <Section>

            <Header>Sign Up</Header>

            <Container>
                <Group>
                    <Label>Username</Label>
                    <Input type="text" value={username} onChange={ (e) => setUsername(e.target.value)} required></Input>
                </Group>

                <Group>
                    <Label>Email</Label>
                    <Input type="email" value={email} onChange={ (e) => setEmail(e.target.value)}></Input>
                </Group>

                <Group>
                    <Label>Password</Label>
                    <Input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}></Input>
                </Group>

                <Group>
                    <Label>Confirm Password</Label>
                    <Input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}></Input>
                </Group>

                <Submit onClick={ handleSignup }>SignIn</Submit>
            </Container>

        </Section>

    </Wrapper>
  );
};

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

// const Toggle = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const Button = styled.div`
//     padding: 10px 25px;
// `;

const Container = styled.form`
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
    border: 1px solid white;
    outline: none;
    border-radius: 10px;
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

export default SignUP;
