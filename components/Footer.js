import React from "react";
import { Container, Box, Grid } from '@mui/material';

// add font
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import PublicIcon from '@mui/icons-material/Public';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// makestyle
import { makeStyles } from "@material-ui/core";

const colorHeading = '#323232';
const colorHover = '#40c6ff';
const colorDefaul = '#666';


const useStyle_footer = makeStyles({
    box_f: {
        '@media (max-width: 899px)': {
            marginBottom: '25px',
            Clear: 'both',
            overflow: 'hidden',
        }
    },
    footer_main: {
        backgroundColor: '#fff',
        paddingTop: '45px',
        paddingBottom: '8px',
    },
    title_f: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '10px 0px 14px 0px',
        borderBottom: 'none',
        paddingBottom: '0px',
        fontFamily: 'Merriweather',
        color: `${colorHeading}`,
    },
    address_f: {
        listStyle: 'none',
        padding: '0px',
        margin: '0px 0px 15px 0px',
        '& li': {
            padding: '8px 0px',
            marginBottom: '3px',
            borderBottom: 'none',
            color: `${colorDefaul}`,
            '&:first-child': {
                paddingRight: '30px',
            },
            '& svg': {
                fontSize: '16px',
                color: `${colorDefaul}`,
                marginRight: '15px',
            },
            '& a': {
                color: `${colorDefaul}`,
                '&:hover': {
                    color: `${colorHover}`,
                }
            }
        }
    },
    social_f: {
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
        float: 'left',
        '& li': {
            display: 'inline-flex',
            padding: '0px',
            margin: '0px',
            '& a': {
                width: 40,
                height: 40,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '15px',
                borderRadius: '50%',
                transition: '0.35s',
                border: '1px solid #666',
                '& svg': {
                    fontSize: ' 16px',
                    color: `${colorDefaul}`,
                },
                '&:hover': {
                    borderColor: `${colorHover}`,
                    backgroundColor: `${colorHover}`,
                    '& svg': {
                        color: "#fff",
                    },
                }
            }
        }
    },
    menu_footer: {
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
        '& li': {
            display: 'flex',
            alignItems: 'center',
            lineHeight: '30px',
            '& svg': {
                fontSize: '8px',
                marginRight: '15px',
                color: `${colorDefaul}`,

            },
            '& a': {
                color: `${colorDefaul}`,
                fontSize: '16px',
                '&:hover': {
                    color: `${colorHover}`,
                }
            }

        }
    }

});
const Footer = () => {
    const classes = useStyle_footer()
    return (
        <div className={classes.footer_main}>
            <React.Fragment>
                <Container maxWidth="lg">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={3}>
                                <div className={classes.box_f}>
                                    <p className={classes.title_f}>Contact us</p>
                                    <ul className={classes.address_f}>
                                        <li><HomeIcon />PO Box CT16122 Collins Street West, Victoria 8007, Australia.</li>
                                        <li><LocalPhoneIcon />+1 (2) 345 6789</li>
                                        <li><MailIcon /><a href="">contact@yourdomain.com</a></li>
                                        <li><PublicIcon /><a href="">http://yourdomain.com</a></li>
                                    </ul>
                                    <ul className={classes.social_f}>
                                        <li><a href=""><FacebookSharpIcon /></a></li>
                                        <li><a href=""><TwitterIcon /></a></li>
                                        <li><a href=""><LinkedInIcon /></a></li>
                                        <li><a href=""><GoogleIcon /></a></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <div className={classes.box_f}>
                                    <p className={classes.title_f}>Information</p>
                                    <ul className={classes.menu_footer}>
                                        <li><FiberManualRecordIcon /><a href="">New Product</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Best Seller</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Feature Product</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Deal off day</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Handcrafted, Artisan Jewelry</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Jewelry Boxes & Organizers</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Jewelry Design & Repair</a></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <div className={classes.box_f}>
                                    <p className={classes.title_f}>My account</p>
                                    <ul className={classes.menu_footer}>
                                        <li><FiberManualRecordIcon /><a href="">My account</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Wishlist</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Store List 1</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Personal Information</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Order History</a></li>
                                        <li><FiberManualRecordIcon /><a href="">Other</a></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <div className={classes.box_f}>
                                    <p className={classes.title_f}>Instagram</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default Footer;
