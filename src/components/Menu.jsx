import styled from "styled-components";
import React from "react";
import MyTube from "../img/logo.png";
import {
  Home,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  HistoryOutlined,
  LibraryMusicOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  MovieOutlined,
  ArticleOutlined,
  LiveTvOutlined,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  SettingsBrightnessOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
`;

const Login = styled.div``;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ setDarkMode, darkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={MyTube} alt="Logo" />
          MyTube
        </Logo>
        <Item>
          <Home />
          Home
        </Item>
        <Item>
          <ExploreOutlined />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlined />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
        <Login>Sign in to like videos, comment, and subscribe.</Login>
        <Button>
          <AccountCircleOutlined />
          SIGN IN
        </Button>
        <Hr />
        <Title>BEST OF MYTUBE</Title>
        <Hr />
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
