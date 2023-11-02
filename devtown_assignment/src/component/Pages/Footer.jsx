import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width:767px){
    display:block;
  }
`;

const Section = styled.div`
  flex: 1;
  margin-bottom: 20px;
  &:last-child {
    flex: 2;
  }
`;

const SectionTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 20px;


`;

const SectionList = styled.ul`
  list-style: none;
  padding: 0;

`;

const SectionListItem = styled.li`
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align:center;
  margin:auto
`;

const SubscriptionForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SubscriptionInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #fff;
`;

const SubscriptionButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
const A = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <SectionTitle>Navigation</SectionTitle>
          <SectionList>
            <SectionListItem><A href="#">Home</A></SectionListItem>
            <SectionListItem><A href="#">Shop</A></SectionListItem>
            <SectionListItem><A href="#">About Us</A></SectionListItem>
            <SectionListItem><A href="#">Contact</A></SectionListItem>
          </SectionList>
        </Section>
        <Section>
          <SectionTitle> Service</SectionTitle>
          <SectionList>
            <SectionListItem><A href="#">Shipping</A></SectionListItem>
            <SectionListItem><A href="#">Returns</A></SectionListItem>
            <SectionListItem><A href="#">Privacy Policy</A></SectionListItem>
            <SectionListItem><A href="#">24x7</A></SectionListItem>
          </SectionList>
        </Section>
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionList>
          <SectionListItem> <A>123 Main Street</A></SectionListItem>
          <SectionListItem> <A>Amritsar, India</A></SectionListItem>
          <SectionListItem> <A>Email: abidkhan263187@gmail.com</A></SectionListItem>
          <SectionListItem> <A>Phone: +91 628-000-1521</A></SectionListItem>
          </SectionList>
        </Section>
        {/* <Section>
          <SectionTitle>Subscribe to our Newsletter</SectionTitle>
          <SubscriptionForm>
            <SubscriptionInput type="email" placeholder="Your email" />
            <SubscriptionButton>Subscribe</SubscriptionButton>
          </SubscriptionForm>
        </Section> */}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
