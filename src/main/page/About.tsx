import React from 'react';
import styled from 'styled-components';
import MainPageTitle from '../component/MainPageTitle';


const Container = styled.div`
  display: flex;
  position: relative;
  width: 75%;
  margin : 0 auto;
  flex-direction: column;

  @media (max-width: 800px) {
    margin: 0 auto;
    width: 90%;
  }
`

const About1Container = styled.div`
  display: flex;
  margin-top: clamp(3.5rem, 5vw, 7rem);
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  z-index: 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const About1Img = styled.img`
  display : flex;
  width: 54%;

  @media (max-width: 800px) {
    width:100%;
    margin-bottom: 2rem;
    order: 1;
    margin: 0 auto;
  }
`

const About1ContentContainer = styled.div`
  display:flex;
  width : 46%;
  align-items: flex-end;

  @media (max-width: 800px){
    align-items: flex-start;
    margin: 0 auto;
    width:100%;
    display:flex;
    order:2 ;
    flex-direction: column;
  }
  
`;

const About2ContentContainer = styled.div`
  display:flex;
  width : 46%;
  align-items: flex-start;
  
  @media (max-width: 800px){
    align-items: flex-start;
    margin: 0 auto;
    width:100%;
    display:flex;
    order:2 ;
    flex-direction: column;
  }
  
`

const About1ContentLogo = styled.img`
  display : none;
  @media (max-width: 800px){
    display : flex;
    width: 10%;
    margin-top: 2rem;
  }
`


const About1Content = styled.div`
  display : flex;
  width: 100%;
  color : #EEEEEE;
  font-size : clamp(1rem, 1.8vw, 3rem);
  align-self: flex-end;
  word-break: keep-all;
  white-space: nowrap;
  line-height: 1.5;

  @media (max-width: 800px) {
    order: 2;
    font-size: 1.3rem;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`

const AboutCenterImg = styled.img`
  display: flex;
  position: relative;
  width: 60%;
  margin: -12vw auto;
  z-index: 1;
  @media (max-width: 800px) {
    display: none;
  }
`

const About2Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  z-index: 0;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const About2Img = styled.img`
  display : flex;
  width: 56%;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`

const About2Content = styled.div`
  display : flex;
  margin-left: 1%;
  width: 100%;
  color : #EEEEEE;
  font-size : clamp(1rem, 1.8vw, 3rem);
  align-items: flex-start;
  
  word-break: keep-all;
  line-height: 1.5;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 1.3rem;
    margin: 0 auto;
    margin-top: 2rem;
  }
`

function About() {
  return (
    <Container>
      <MainPageTitle>About</MainPageTitle>
      <About1Container>
        <About1ContentContainer>
        <About1ContentLogo src="/image/MainLogo.png" />
        <About1Content>
          시퀀스는 IT 서비스 개발을 원하는
          <br/>
          개발, 디자인 부문의 대학생들이 모여
          <br/>
          함께 프로젝트를 진행하는 공간입니다.
        </About1Content>
        </About1ContentContainer>
        <About1Img src="/image/About1.png" />
      </About1Container>
      <AboutCenterImg src="/image/LogoEmpty.png" />
      <About2Container>
      <About2Img src="/image/About2.png" />
        <About2ContentContainer>
        <About1ContentLogo src="/image/MainLogo.png" />
        <About2Content>
        영화의 주제와 인물들을 소개하는 시퀀스처럼,
        우리의 만남과 협업이 하나의 영화와 같이 
        새로운 이야기를 만들어내는 것을 목표로 하고 있습니다.
        </About2Content>
        </About2ContentContainer>
      </About2Container>
    </Container>
  );
}

export default About;