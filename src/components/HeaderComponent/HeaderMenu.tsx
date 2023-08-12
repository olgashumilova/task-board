import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../routes";

const HeaderMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const options = [
    { title: t("header.home"), url: ROUTES.HOME },
    { title: t("header.features"), url: ROUTES.FEATURES },
    { title: t("header.about"), url: ROUTES.ABOUT },
    { title: t("header.signIn"), url: ROUTES.SIGNIN },
    { title: t("header.signUp"), url: ROUTES.SIGNUP },
  ];
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "white", fontSize: 40 }} cursor="pointer" />
      </Button>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option.title}
            onClick={() => {
              handleClose();
              navigate(option.url);
            }}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HeaderMenu;
