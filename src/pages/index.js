import React, { useState } from 'react';
import axios from 'axios';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import {
  Layout,
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
} from '../styles';
import Logo from '../components/Logo';
import SEO from '../components/seo';
import '../index.css';

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
    const uri =
      'https://triad-coming-soon.netlify.com/.netlify/functions/signup';

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
    <Layout>
      <SEO />
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
              Triad’s technology and materials are a remarkable engineering
              achievement we've spent 10 years perfecting. Premium men's
              clothing engineered for confidence. A lifestyle brand for people
              on the move.
            </Paragraph>
            <InputButtonWrapper onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: 'none' }}>
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
              <Button type="submit">{sending ? 'SENDING' : 'NOTIFY ME'}</Button>
              <Message isSuccess={success}>
                Success! You will be notified, as soon as we launch our product
                line.
              </Message>
              <Message isSuccess={pending}>
                We have sent you an email to confirm your subscription.
              </Message>
              <Message isSuccess={error}>
                Error! Something went wrong, please check your email address and
                try again.
              </Message>
            </InputButtonWrapper>
          </Content>
          <Footer>
            <SocialLink
              href="https://www.facebook.com/weartriad"
              target="_blank"
              rel="noopener,noreferrer"
              title="Subscribe on Facebook"
            >
              <FaFacebookF size={20} color="#444" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/weartriad"
              target="_blank"
              rel="noopener,noreferrer"
              title="Follow on Instagram"
            >
              <FaInstagram size={20} color="#444" />
            </SocialLink>
            <SocialLink
              href="https://www.twitter.com/weartriad"
              target="_blank"
              rel="noopener,noreferrer"
              title="Follow on Twitter"
            >
              <FaTwitter size={20} color="#444" />
            </SocialLink>
          </Footer>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    bg: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(sizes: "100vh") {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
