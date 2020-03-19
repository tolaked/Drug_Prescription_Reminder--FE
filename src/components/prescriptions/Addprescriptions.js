import React,{useEffect} from 'react'
import styled from 'styled-components'
import Header from '../../reusables/Header.js'
import LeftAside from './LeftAside';
import AllCards from '../prescriptionCard/AllCards';

const Addprescriptions =()=> {
    return (
        <>
        <Header/>
        <StyledContainer>
            <LeftAside/>
            <AllCards/>
        </StyledContainer>
        </>
    )
}

const StyledContainer = styled.section`
    display: flex;
`;


  
  export default Addprescriptions