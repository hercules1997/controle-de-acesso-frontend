/* eslint-disable jsx-a11y/alt-text */
import { LogoutOutlined } from "@mui/icons-material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import paths from "../../constants/index";
import { useUser } from "../../hooks/UserContext";
import listLinks from "./menu-list";
import {
  ContainerItems,
  ContainerMenu,
  ListLink,
  ContainerLogout,
} from "./style";

export function SideMenu({ path }) {
  const { logout } = useUser();
  const navigate = useNavigate();

  return (
    <ContainerMenu>
      <span>
        <img src={logo} />
      </span>

      <hr className="hr"></hr>
      {listLinks.map((item) => (
        <ContainerItems key={item.id}>
          <ListLink to={item.link} isactive={path === item.link}>
            <item.icon className="icon" to={item.link} />
            {item.label}
          </ListLink>
        </ContainerItems>
      ))}
      <hr></hr>
      <ContainerLogout
        onClick={() => {
          logout();
          navigate(paths.Login);
        }}
      >
        <ListLink style={{ color: "#fa9600" }}>
          <LogoutOutlined className="iconLogout" />
          Sair
        </ListLink>
      </ContainerLogout>
    </ContainerMenu>
  );
}

SideMenu.propTypes = {
  path: PropTypes.string,
};
