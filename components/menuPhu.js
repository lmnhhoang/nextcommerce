import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';

// import img
import icon_menu from '../assets/img/icon_menu.png'


// makestyle
import { makeStyles } from "@material-ui/core";


const colorHeading = '#323232';
const colorHover = '#40c6ff';
const colorDefaul = '#666';

const useStyle_menuMain = makeStyles({
  menuMain: {
    flexGrow: 1,
    display: 'flex',
    '@media (max-width:899px)': {
      display: 'none',
    },
    '& a': {
      textTransform: 'uppercase',
      fontFamily: "Mulish,'sans-serif'",
      color: `${colorDefaul}`,
      padding: '0px 22px',
      fontSize: '16px',
      '&:first-child': {
        paddingLeft: '0px',
      },
      '&:hover': {
        color: `${colorHover}`,
      }
    }
  },
  buttonMobile: {
    flexGrow: 1,
    display: 'none',
    '@media (max-width:899px)': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    '& button': {
      width: '36px',
      height: '36px',
      backgroundColor: '#fff',
      border: 'none',
      backgroundImage: `url(${icon_menu.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      '&:hover': {
        cursor: 'pointer',
      }
    }
  },
  menuMobile: {
    '& ul': {
      padding: '0px',
      '& li': {
        minWidth: '270px',
        '& a': {
          display: 'block',
          width: '100%',
          textTransform: 'uppercase',
          color: `${colorDefaul}`,
          fontSize: '14px',
          height: '40px',
          lineHeight: '40px',
          padding: '0px 10px',
          '&:hover': {
            color: `${colorHover}`,
          }
        }
      }
    }
  }
})


const pages = ['Home', 'Vendor', 'Shop', 'Pages ', 'Blog', 'Contact'];
const ResponsiveAppBar = () => {

  const classes = useStyle_menuMain()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <Box>
      <Toolbar disableGutters>
        <Box className={classes.buttonMobile}>
          <button
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
          </button>
          <Menu className={classes.menuMobile}
            id="menu-appbar"
            elevation={1}
            anchorEl={anchorElNav}
            keepMounted
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <li key={page} onClick={handleCloseNavMenu}>
                <a href="#">{page}</a>
              </li>
            ))}
          </Menu>
        </Box>

        <Box className={classes.menuMain}>
          {pages.map((page) => (
            <a href="#"
              key={page}
              onClick={handleCloseNavMenu}
            >
              {page}
            </a>
          ))}
        </Box>
      </Toolbar >
    </Box >
  );
};
export default ResponsiveAppBar;
