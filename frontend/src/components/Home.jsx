import React from "react";
import {
  AdminRegisterLink,
  ButtonsContainer,
  HomeContainer,
  LoginButton,
  Logo,
  LoremTextContainer,
  Navbar,
  NavigationLinks,
  NavLink,
  SchoolImage,
  SchoolInfo,
  Title,
} from "../styles/styles";
import { LoremIpsum } from "lorem-ipsum";
import Bg from "../assets/Bg.png";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const LoremText = lorem.generateParagraphs(1);

  const handleLoginClick = () => {
    navigate("/choose-user");
  };

  return (
    <>
      <Navbar>
        <Logo src={logo} alt="logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <LoginButton onClick={handleLoginClick}>Guest Mode</LoginButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          <LoremTextContainer>
            <p>{LoremText}</p>
          </LoremTextContainer>
          <AdminRegisterLink>Admin Register</AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={Bg} alt="Pupils" />
      </HomeContainer>
    </>
  );
};

export default Home;
