import React, { useState } from 'react';
import axios from 'axios';
import { graphql } from 'gatsby';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import {
  InitialLayout,
  PageWrapper,
  Background,
  Overlay,
  ContentWrapper,
  Content,
  Title,
  Paragraph,
  NoLineBreak,
  InputButtonWrapper,
  Input,
  Button,
  Footer,
  SocialLink,
  Message,
  Trusted,
  TrustedTitle,
  TrustedIcons,
} from '../styles';
import Logo from '../components/Logo';
import SEO from '../components/seo';
import '../index.css';
import { NFL } from '../components/Icons/nfl';
import { Porsche } from '../components/Icons/porsche';
import { CocaCola } from '../components/Icons/coca';
import { Nascar } from '../components/Icons/nascar';
import { Mercedes } from '../components/Icons/mercedes';
import { MLB } from '../components/Icons/mlb';
import { Target } from '../components/Icons/target';
import { Pepsi } from '../components/Icons/pepsi';
import { HomeDepot } from '../components/Icons/homedepot';
import { Dominos } from '../components/Icons/dominos';
import { Bestbuy } from '../components/Icons/bestbuy';
import { Fila } from '../components/Icons/fila';

const IndexPage = ({
  data: {
    bg: { childImageSharp },
  },
}) => {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    if (!email) return;
    const uri = 'https://weartriad.com/.netlify/functions/signup';

    setSending(true);
    setPending(false);
    setSuccess(false);
    setError(false);

    try {
      const response = await axios.post(uri, {
        email,
      });
      setSending(false);
      if (response.data.status === 'pending') setPending(true);
      if (response.data.status === 'saved email') setSuccess(true);
      if (response.data.status !== 'saved email') setError(true);
    } catch (error) {
      setSending(false);
      console.log(error.errorMessage);
      setError(true);
    }
  };

  return (
    <>
      <InitialLayout>
        <SEO image={childImageSharp.fluid.src} />
        <Background fluid={childImageSharp.fluid} alt="Background Image" />
        <Overlay />
        <PageWrapper>
          <ContentWrapper>
            <Logo />
            <Content>
              <Title>
                <NoLineBreak>NO SWEAT.</NoLineBreak>
                <NoLineBreak>NO STAINS.</NoLineBreak>
                <NoLineBreak>NO SMELL.</NoLineBreak>
              </Title>
              <Paragraph>
                Introducing Triad: A breakthrough in premium men's clothing.
                Engineered for confidence with a revolutionary proprietary
                technology that changes how men work, live, and train.
                <br />
                <br />
                Made to be free. #weartriad
              </Paragraph>
              <InputButtonWrapper onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  style={{ width: 0, height: 0, opacity: 0 }}
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                />
                <Button type="submit">
                  {sending ? 'SENDING' : 'NOTIFY ME'}
                </Button>
                <Message isSuccess={success}>
                  Success! You will be notified, as soon as we launch our
                  product line.
                </Message>
                <Message isSuccess={pending}>
                  We have sent you an email to confirm your subscription.
                </Message>
                <Message isSuccess={error}>
                  Error! Something went wrong, please check your email address
                  and try again.
                </Message>
              </InputButtonWrapper>
            </Content>
            <Footer>
              <SocialLink
                href="https://www.facebook.com/triadbrand"
                target="_blank"
                rel="noopener,noreferrer"
                title="Subscribe on Facebook"
              >
                <FaFacebookF size={20} color="#fff" />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/triadbrand"
                target="_blank"
                rel="noopener,noreferrer"
                title="Follow on Instagram"
              >
                <FaInstagram size={20} color="#fff" />
              </SocialLink>
              <SocialLink
                href="https://www.twitter.com/triadbrand"
                target="_blank"
                rel="noopener,noreferrer"
                title="Follow on Twitter"
              >
                <FaTwitter size={20} color="#fff" />
              </SocialLink>
            </Footer>
          </ContentWrapper>
        </PageWrapper>
      </InitialLayout>
      <Trusted>
        <TrustedTitle>TRUSTED BY</TrustedTitle>
        <TrustedIcons>
          <NFL />
          <Porsche />
          <CocaCola />
          <Nascar />
          <Mercedes />
          <MLB />
          <Target />
          <Pepsi />
          <HomeDepot />
          <Dominos />
          <Bestbuy />
          <Fila />
        </TrustedIcons>
      </Trusted>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    bg: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
