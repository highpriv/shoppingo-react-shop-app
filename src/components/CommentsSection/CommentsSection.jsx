import React, { useState, useEffect } from "react";
import style from "./CommentsSection.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

function CommentsSection(props) {
  return (
    <div className={style.container}>
      <div className={style.averageSection}>
        <div className={style.avgStars}>
          <h3>4.5</h3>
          <StarIcon sx={{ fontSize: 24, color: "#F8C858" }} />
          <StarIcon sx={{ fontSize: 24, color: "#F8C858" }} />
          <StarIcon sx={{ fontSize: 24, color: "#F8C858" }} />
          <StarIcon sx={{ fontSize: 24, color: "#F8C858" }} />
          <StarIcon sx={{ fontSize: 24, color: "#F8C858" }} />
        </div>

        <div className={style.commentCount}>
          <p> 4512 Değerlendirme</p>
          <p>|</p>
          <p>423 Yorum</p>
        </div>
      </div>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}

export default CommentsSection;
