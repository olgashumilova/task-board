import React, { useState } from "react";
import { Button, Stack, Typography, Menu, MenuItem } from "@mui/material/";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";

const options = ["Русский", "English"];
const ITEM_HEIGHT = 48;

const FooterComponent = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const selectLanguage = (option: string) => {
    i18n.changeLanguage(option === "Русский" ? "ru" : "en");
    setAnchorEl(null);
  };

  return (
    <Stack
      bgcolor={"primary.main"}
      height={80}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingLeft={4}
      spacing={4}
      color={"white"}
    >
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {i18n.language === "ru" ? "Русский" : "English"}
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
        >
          {options.map((option) => (
            <MenuItem key={option} onClick={() => selectLanguage(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <Typography>© TaskBoard, 2023 г.</Typography>
    </Stack>
  );
};

export default FooterComponent;
