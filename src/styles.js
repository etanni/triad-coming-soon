import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const InitialLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: scroll;
  @media (min-width: 768px) {
    /* min-height: unset; */
    /* height: 100vh; */
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.71;
  @media (min-width: 768px) {
    opacity: 0.39;
  }
`;

export const Background = styled(Img)`
  position: absolute !important;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  img {
    object-position: center center !important;
  }
`;

export const FillWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px 20px 100px;
  color: #000;
  min-height: 100vh;
  z-index: 55;
  @media (min-width: 768px) {
    padding: 88px 88px 50px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 600px 1fr;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-rows: auto 1fr auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    /* justify-content: flex-start; */
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  max-width: 350px;
  justify-content: center;
  @media (min-width: 768px) {
    max-width: 600px;
    justify-content: flex-start;
    font-size: 40px;
    line-height: 1.33;
    margin-bottom: 30px;
    font-weight: bold;
  }
`;

export const NoLineBreak = styled.span`
  margin-right: 10px;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: 0.2px;
  margin-bottom: 60px;
  max-width: 400px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 15px;
    line-height: 1.6;
    /* font-weight: 400; */
  }
`;

export const InputButtonWrapper = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 80px;
  }
`;
export const Input = styled.input`
  height: 54px;
  flex-grow: 1;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  background-color: transparent;
  color: #000;
  box-shadow: none;
  border: solid 2px #c10d28;
  padding: 0 10px;
  border-radius: 0;
  &::placeholder {
    color: #000;
    opacity: 1;
  }
  &:ms-placeholder {
    color: #000;
    opacity: 1;
  }
  &::ms-placeholder {
    color: #000;
    opacity: 1;
  }
  @media (min-width: 768px) {
    border-right: none;
    font-size: 15px;
    padding: 0 20px;
  }
`;
export const Button = styled.button`
  height: 54px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #fff;
  background-color: #c10d28;
  border: 0;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  @media (min-width: 768px) {
    width: 135px;
  }
  &:hover {
    background: #000;
    border-color: #000;
  }
`;

export const Message = styled.span`
  display: block;
  position: absolute;
  top: 116px;
  font-size: 12px;
  line-height: 1.4;
  opacity: ${({ isSuccess }) => (isSuccess ? 1 : 0)};
  transition: opacity 0.3s ease;
  @media (min-width: 768px) {
    top: 60px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
  font-size: 15px;
  font-weight: bold;
  appearance: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  margin-right: 36px;
  height: 36px;
  width: 36px;
  background: #000;
  border-radius: 50%;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const LogoWrapper = styled.div`
  width: 90%;
  max-width: 200px;
  position: relative;
  /* height: 15vh; */
  margin-bottom: 30px;
  justify-self: center;
  @media (min-width: 768px) {
    max-width: 350px;
    justify-self: flex-start;
  }
  @media (min-width: 1024px) {
    height: 105px;
    width: unset;
    margin-bottom: 80px;
  }
  svg {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    @media (min-width: 1024px) {
      height: 100%;
      width: unset;
    }
  }
`;

export const Trusted = styled.div`
  width: 100%;
  padding: 80px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TrustedTitle = styled.div`
  display: block;
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 16px;
  text-align: center;
  font-weight: 900;
`;

export const TrustedIcons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  color: black;
  width: calc(100% / 3);
  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
  @media (min-width: 1024px) {
    width: calc(100% / 6);
  }
`;
