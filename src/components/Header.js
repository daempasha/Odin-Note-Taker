import React from 'react';
import styled from 'styled-components'
import './Header.css'
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Background = styled.div`
    display: flex;
    padding: 2vh 10vw;

`;

const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Skranji&display=swap');
    font-family: 'Skranji', cursive;
    color: #DEBE22;
    letter-spacing: 5px;
`;

export default function Header(props){
    return(
        <Background>
            <Title>{props.title}</Title>
            <a href='https://github.com/daempasha' target='_new' className="github-icon"><FontAwesomeIcon  icon={faGithubSquare} size='2x' /></a>
        </Background>
        
    );
}

