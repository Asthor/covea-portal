import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Dashboard",
      icon: <InboxIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "Incidents",
      icon: <MailIcon />,
      onClick: () => history.push("/about")
    },
    {
      text: "Roadmap",
      icon: <MailIcon />,
      onClick: () => history.push("/contact")
    },
    {
      text: "Changelog",
      icon: <MailIcon />,
      onClick: () => history.push("/contact")
    },
    {
      text: "Livraisons",
      icon: <MailIcon />,
      onClick: () => history.push("/contact")
    }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
