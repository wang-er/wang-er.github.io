import React from 'react'
import styled from "styled-components";
import { erinBlack, erinWhite } from '../../styles/colors';

const ContactMessage = styled.h2`
    margin-top: 1em;
    margin-bottom: 5em;

`

export const Contact = () => (
    <>
            <h1>thanks for visiting!</h1>
            <ContactMessage>
                <a href="mailto:erinwang101@gmail.com">Send an email</a>, <a href="https://www.linkedin.com/in/wang-er/">connect on LinkedIn</a>,<br/>  or <a href="https://drive.google.com/file/d/1HFHu9CC2IQNzLYGeyPmb8wfW94s20hBl/view?usp=sharing">view my resume</a> if you want to do something together :)
            </ContactMessage>
    </>
)