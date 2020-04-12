import React, { Component } from "react"

import { Layout } from "../components/layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import colors from "../common/colors";
import { SlantedBorderElement } from "../common/slanted-borders-helpers.js";

import breakpoints
from '../common/breakpoints.js';

const {
  mobile,
  tablet,
  medium,
  large,
  xl,
  xxl,
} = breakpoints;
const MainContainer = styled(SlantedBorderElement)`
  color: ${colors.typography.light};
  background-color: ${colors.backgrounds.dark1};
  `;
const Title = styled.h2`
  padding-top: 32px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 47px;
  
  @media (min-width: 480px) {
    font-size: 36px;
  }
`;
const Section = styled.div`
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  transform: translateX(5%);
  @media (min-width: 480px) and (max-width: 760px) {
    min-width: 150px;
  }
  @media (min-width: 760px) {
    transform: translateX(-15%);
    min-width: 200px;
  }
`;
const RightAlignSection = styled(Section)`
  @media (min-width: 480px)  {
    min-width: 150px;
  }
  @media (min-width: 760px)  {
    transform: translateX(15%);
    min-width: 300px;
  }
`;
const BigNumber = styled.div`
  font-size: 60px;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  font-weight: 600;
  font-size: 48px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 480px) {
    font-size: 144px;
    width: 100px;
  }
`;
const Description = styled.div`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 300px;
  @media (min-width: 480px)  {
    min-width: 150px;
  }
  @media (min-width: 760px)  {
    transform: translateX(15%);
    min-width: 300px;
    width: 380px;
  }
`;
const SectionTitle = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 47px;
  @media (min-width: 480px) {
    font-size: 36px;
  }
`;
const SectionParagraph = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 31px;
  @media (min-width: 480px) {
    font-size: 24px;
  }
`;

const GettingStartedComponent = () => (
    <MainContainer>

        <Title>Getting Started</Title>

        <Section>
            <BigNumber>1</BigNumber>
            <Description>
                <SectionTitle>Sign up and log in.</SectionTitle> 
                <SectionParagraph>It takes 30 seconds</SectionParagraph>
            </Description>
        </Section>

        <RightAlignSection >
            <BigNumber>2</BigNumber>
            <Description>
                <SectionTitle>Configure some settings. </SectionTitle> 
                <SectionParagraph>Add some Alerts. Connect up some lights.</SectionParagraph>
            </Description>
        </RightAlignSection> 

        <Section>
            <BigNumber>3</BigNumber>
            <Description>
                <SectionTitle>Profit!</SectionTitle> 
                <SectionParagraph>The Sky is the limit.</SectionParagraph>
            </Description>
        </Section>

    </MainContainer>
);

export default GettingStartedComponent;