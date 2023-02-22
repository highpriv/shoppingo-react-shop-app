import React, { useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import style from "./ProfileSidebar.module.css";

function ProfileSidebar(props) {
  let menuItems = [
    {
      text: "Siparişlerim",
      selected: true,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Değerlendirmelerim",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Satıcı Mesajlarım",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Tekrar Satın Al",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Cüzdanım",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Takip Ettiğim Mağazalar",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Önceden Gezdiklerim",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "İndirim Kuponlarım",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Kullanıcı Bilgilerim",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
    {
      text: "Adres Bilgilerim",
      selected: false,
      icon: <ContentCut fontSize="small" />,
    },
  ];

  const [menuItemsArray, setMenuItemsArray] = useState(menuItems);

  const setSelectedItem = (i) => {
    const newArray = menuItems.map((item, index) => {
      if (i === index) return { ...item, selected: true };
      else return { ...item, selected: false };
    });

    setMenuItemsArray(newArray);
  };

  return (
    <div className={style.container}>
      <h2>Hesabım</h2>
      <MenuList className={style.menuItems}>
        {menuItemsArray.map(function (item, i) {
          return (
            <MenuItem
              onClick={() => setSelectedItem(i)}
              className={item.selected ? style.selectedItem : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                className={item.selected ? style.selectedText : null}
              >
                {item.text}
              </ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </div>
  );
}

export default ProfileSidebar;
