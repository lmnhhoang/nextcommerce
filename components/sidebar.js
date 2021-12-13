import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AccIcon from "@mui/icons-material/AccountBoxOutlined";
import WhatshotIcon from "@mui/icons-material/LanguageSharp";
import LoginIcon from "@mui/icons-material/Login";
import NativeSelect from "@mui/material/NativeSelect";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  
    '@media (max-width: 768px)': {
      subHeaderMenu:{
        display:'none',
    }
  }
  
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



const SideBarTop = () => {
  const classes = useStyles();
  return (
    <Box sx={{backgroundColor:'rgb(243,243,243)' }}>
    <Container>
      <Box sx={{ flexGrow: 1, padding: '10px 0',
    backgroundColor:'rgb(243,243,243)' }}>
        <Grid container spacing={2} >
          <Grid item xs={6} md={6} className={classes.subHeaderMenu} >
            <Box role="presentation" onClick={handleClick} >
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{ fontSize: 14 }}
                  color="inherit"
                  href="/"
                >
                  Get the app
                </Link>
                <Link
                  underline="hover"
                  sx={{ fontSize: 14 }}
                  color="inherit"
                  href="#"
                >
                  Sell on Multistore
                </Link>
                <Link
                  underline="hover"
                  sx={{ fontSize: 14 }}
                  color="inherit"
                  href="#"
                >
                  Customer Care
                </Link>
                <Link
                  underline="hover"
                  sx={{ fontSize: 14 }}
                  color="inherit"
                  href="#"
                >
                  Track my order
                </Link>
              </Breadcrumbs>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} >
            <Box role="presentation" onClick={handleClick} sx={{ float:"right" }} className={classes.topBarMenu}> 
            <Breadcrumbs aria-label="breadcrumb">
              <Box className={classes.topBarCurLang} >
                <Breadcrumbs aria-label="breadcrumb" sx={{ display: "flex" }}>
                  <NativeSelect defaultValue={30}>
                    <option value={10}>USD, $</option>
                    <option value={20}>EUR, €</option>
                  </NativeSelect>
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center", fontSize: 14 }}
                    color="inherit"
                    href="/getting-started/installation/"
                  >
                    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    English
                  </Link>
                </Breadcrumbs>
                </Box>
                <Box className={classes.topBarLink}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center", fontSize: 14 }}
                    color="inherit"
                    href="/"
                  >
                    <AccIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Join Free
                  </Link>
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center", fontSize: 14 }}
                    color="inherit"
                    href="/getting-started/installation/"
                  >
                    <LoginIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Login
                  </Link>
                </Breadcrumbs>
                </Box>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Box>
  );
}
export default SideBarTop;
