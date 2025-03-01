import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Slide,
  useScrollTrigger,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
    { label: "CV", path: "/cv" },
  ];

  const boxShadow =
    theme.palette.mode === "light"
      ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      : "rgba(0, 0, 0, 0.3) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.1) -3px -3px 6px 1px inset";

  return (
    <>
      <HideOnScroll>
        <Box
          sx={{
            backgroundColor: "inherit",
            width: "100%",
            boxShadow: "none",
            position: "fixed",
            top: "20px",
            left: "0",
            right: "0",
            zIndex: 100,
            opacity: "0.98",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "600px",
                mx: "auto",
                backgroundColor: theme.palette.background.paper,
                boxShadow: boxShadow,
                borderRadius: 10,
                p: 1,
              }}
            >
              {isMobile ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <IconButton
                    edge="start"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ color: theme.palette.primary.dark, ml: 1 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <IconButton onClick={toggleTheme}>
                    {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
                  </IconButton>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    {navItems.map((item) => (
                      <Button
                        component={Link}
                        key={item.label}
                        to={item.path}
                        sx={{
                          color: theme.palette.primary.dark,
                          textTransform: "none", // Remove uppercase for a cleaner look
                          fontWeight: 500,
                          borderRadius: 5,
                          "&:hover": {
                            backgroundColor: theme.palette.secondary.light, // Subtle hover effect
                          },
                        }}
                      >
                        {location.pathname === item.path && (
                          <CircleIcon
                            sx={{
                              width: "7px",
                              mr: 1,
                              color: theme.palette.custom.blue.main,
                            }}
                          />
                        )}
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                  <Box>
                    <IconButton onClick={toggleTheme}>
                      {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                  </Box>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Box>
      </HideOnScroll>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: (theme) => theme.palette.background.default,
            width: "90%",
            mt: 5,
            marginX: "auto",
            borderRadius: "20px",
            opacity: "0.95 ",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={handleDrawerToggle} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                {location.pathname === item.path && (
                  <CircleIcon sx={{ width: "7px", mr: 1, color: "#5c6bc0" }} />
                )}
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
