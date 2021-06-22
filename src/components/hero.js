import React from 'react';
import styled from 'styled-components';

const Hero = (props) => {
  return (
    <Container img={props.images.lg} >
      <Name>{props.name}</Name>
      <Description>Height: {props.appearance.height[1]}</Description>
      <Description>Weight: {props.appearance.weight[1]}</Description>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  -webkit-box-shadow: 0px 19px 19px -10px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    0px 19px 19px -10px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         0px 19px 19px -10px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  border-radius: 13px;
  background: #fff;
  padding:20px 10px;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  background: ${props => `url(${props.img}) no-repeat top center`};
  height:450px;
  @media (max-width:570px) {
    height:350px;
    padding-left:1em;
  }
  background-position:center;
  color:white;
  box-shadow:inset 0px 0px 100px 0px black;
`;

const Name = styled.div`
  font-size: 2em;
  margin-top:auto;
  font-weight:bold;
  padding-bottom:.2em;
  @media (max-width:570px) {
    font-size: 1.2em;
  }
`;

const Description = styled.div`
  padding: .1em;
  font-size: 1.5em;
  font-weight:500;
  @media (max-width:570px) {
    font-size: .9em;

  }
`;

export default Hero;