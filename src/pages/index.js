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
  Success,
  Error,
} from '../styles';
import Image from '../images/bg.jpg';
import Logo from '../components/Logo';
import SEO from '../components/seo';
import '../index.css';

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setSuccess(false);
    setError(false);
    const uri =
      'https://triad-coming-soon.netlify.com/.netlify/functions/signup';
    const response = await axios.post(uri, {
      email,
    });
    if (response.data.status === 'pending') setPending(true);
    if (response.data.status === 'saved email') setSuccess(true);
    if (response.data.status !== 'saved email') setError(false);
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
              <NoLineBreak>NO STAIN.</NoLineBreak>
              <NoLineBreak>NO SMELL.</NoLineBreak>
            </Title>
            <Paragraph>
              Triad’s technology and materials are a remarkable engineering
              achievement we've spent 10 years perfecting. A lifestyle brand for
              people on the move.
            </Paragraph>
            <InputButtonWrapper onSubmit={handleSubmit}>
              <Input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Enter your email address"
              />
              <Button type="submit">NOTIFY ME</Button>
              <Success isSuccess={success}>
                Success! You will be notified, as soon as we launch our product
                line.
              </Success>
              <Success isSuccess={pending}>
                We have sent you an email to confirm your subscription.
              </Success>
              <Error isError={error}>
                Error! Something went wrong, please check your email address and
                try again.
              </Error>
            </InputButtonWrapper>
          </Content>
          <Footer>
            <SocialLink
              href="https://www.facebook.com/weartriad"
              target="_blank"
            >
              facebook
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/weartriad"
              target="_blank"
            >
              instagram
            </SocialLink>
            <SocialLink
              href="https://www.twitter.com/weartriad"
              target="_blank"
            >
              twitter
            </SocialLink>
          </Footer>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;
