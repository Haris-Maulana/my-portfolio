import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+6281-386-329-291">+6281-386-329-291</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:harismaulanaslm@gmail.com">
            harismaulanaslm@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always innovating and be patient look for oportunity</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Haris-Maulana">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/harisrood/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/harismlnaslm/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://twitter.com/harismaulana000">
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;