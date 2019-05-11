import React, { useState } from 'react';
import axios from 'axios';

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
  Icon,
  Message,
} from '../styles';
import Image from '../images/bg.jpg';
import Twitter from '../images/twitter.png';
import Instagram from '../images/instagram.png';
import Facebook from '../images/facebook.png';
import Logo from '../components/Logo';
import SEO from '../components/seo';
import '../index.css';

const IndexPage = () => {
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
      <Background src={Image} alt="Background Image" />
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
              <Input
                type="email"
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
              <Icon src={Facebook} alt="Facebook" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/weartriad"
              target="_blank"
              rel="noopener,noreferrer"
              title="Follow on Instagram"
            >
              <Icon src={Instagram} alt="Instagram" />
            </SocialLink>
            <SocialLink
              href="https://www.twitter.com/weartriad"
              target="_blank"
              rel="noopener,noreferrer"
              title="Follow on Twitter"
            >
              <Icon src={Twitter} alt="Twitter" />
            </SocialLink>
          </Footer>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;
