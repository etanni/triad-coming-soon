import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  @media (min-width: 600px) {
    min-height: unset;
    height: 100vh;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.4;
  @media (min-width: 500px) {
    opacity: 0.33;
  }
`;

export const Background = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  margin: 0;
`;

export const FillWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  color: white;
  height: 100%;
  z-index: 55;
  @media (min-width: 500px) {
    padding: 88px 88px 50px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 25px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  max-width: 600px;
  @media (min-width: 500px) {
    font-size: 40px;
    margin-bottom: 30px;
    font-weight: bold;
  }
`;

export const NoLineBreak = styled.span`
  margin-right: 10px;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 0.2px;
  margin-bottom: 80px;
  max-width: 500px;
`;

export const InputButtonWrapper = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 380px;
  margin-bottom: 40px;
`;
export const Input = styled.input`
  height: 54px;
  flex-grow: 1;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  background-color: transparent;
  color: white;
  box-shadow: none;
  border: solid 2px #ffffff;
  border-right: none;
  padding: 0 10px;
  @media (min-width: 500px) {
    padding: 0 20px;
  }
`;
export const Button = styled.button`
  height: 54px;
  width: 115px;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #000;
  background-color: #fff;
  border: solid 2px #ffffff;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (min-width: 500px) {
    width: 135px;
  }
  &:hover {
    background: #000;
    border-color: #000;
    color: #fff;
  }
`;

export const Message = styled.span`
  display: block;
  position: absolute;
  top: 60px;
  font-size: 12px;
  line-height: 1.4;
  opacity: ${({ isSuccess }) => (isSuccess ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  max-width: 350px;
`;

export const SocialLink = styled.a`
  font-size: 15px;
  font-weight: bold;
  appearance: none;
  color: white;
  cursor: pointer;
  text-decoration: none;
  margin-right: 24px;
  height: 32px;
`;

export const LogoWrapper = styled.div`
  width: 90%;
  max-width: 500px;
  position: relative;
  margin-bottom: 25vh;
  justify-self: center;
  @media (min-width: 500px) {
    justify-self: flex-start;
  }
  @media (min-width: 1024px) {
    height: 115px;
    width: unset;
    margin-bottom: 10vh;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    @media (min-width: 1024px) {
      height: 100%;
      width: unset;
    }
  }
`;
