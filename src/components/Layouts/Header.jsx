import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Origines", path: "/origines" },
    { label: "Quiz", path: "/quiz" },
    { label: "Mini-jeux", path: "/minijeux" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">CodeBuddy</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                to={link.path}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon sx={{ ml: 5 }} />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <List sx={{ width: 250 }}>
              {navLinks.map((link) => (
                <ListItem
                  button
                  key={link.label}
                  component={Link}
                  to={link.path}
                  onClick={() => toggleDrawer(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{
              "& .MuiPaper-root": {
                marginRight: "20px",
                borderRadius: 2,
                minWidth: 170,
              },
            }}
          >
            <MenuItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 0.5,
                color: "#212121",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Florentin Fallon
              </Typography>
            </MenuItem>
            <Divider sx={{ marginY: 1 }} />
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/profil"
              variant="body2"
              color="textPrimary"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <SettingsIcon fontSize="small" sx={{ color: "#728996" }} />
              Profil
            </MenuItem>
            <Divider sx={{ marginY: 1 }} />
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/connexion"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <LogoutIcon fontSize="small" sx={{ color: "#d50000" }} />
              Déconnexion
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
