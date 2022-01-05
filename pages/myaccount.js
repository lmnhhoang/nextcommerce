import * as React from "react";
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@mui/styles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from '@material-ui/core/TextField';
import Banner from '../assets/img/banner_page.png';

const useStyles = makeStyles({
  pageAccout: {
    marginBottom: "60px",
    minHeight: "200px",
    background: `url(${Banner.src})`,
    backgroundSize: "cover"
  },


  titlePage: {
    display: "flex",
    paddingTop: "75px",
    paddingBottom: "75px",
    '@media (max-width: 768px)': {
      display: "block",
    }

  },


  rightTextPage: {
    paddingTop:"12px",
    float: "right",
    '@media (max-width: 768px)': {
      float: "inherit",
    }
  },
  inputAccout: {
    width: "100%",
    minHeight: "55px",
    paddingLeft: "10px",
    marginTop: "10px"
  },
  formPage: {
    display: "flex",
    border: "1px solid #ccc",
    padding: "30px",
    '@media (max-width: 768px)': {
      display: "block",
     
    }
  },
  loginPage: {
    '@media (max-width: 768px)': {
      marginBottom: "40px",
    }
  },
  formLogin:{
    width:"100%",
    paddingRight:"25px",
    
  },
  
  regisPage:{
    '@media (max-width: 768px)': {
      marginTop: "40px",
    }
  },
});

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});


export default function MyAccout() {
  const [checked, setChecked] = React.useState(false);
  const [isChecked, setStatusChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleOnclickShow = () => {
    setStatusChecked((item) => true);
  };
  const handleOnclickHidden = () => {
    setStatusChecked((item) => false);
  };
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const formik = useFormik({
    initialValues: {
      email: 'example@example.com',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.email == 'admin@gmail.com' && values.password == 'admin123') {
        window.location.replace('/profile');
      } else {
        alert('Wrong user');
      }
    },
  });

  return (
    <>
      <Box className={classes.pageAccout}>
        <Container>
          <Box className={classes.titlePage} >
            <Grid item lg={6}>
              <Box >
                <Typography sx={{ color: "white" }} component="h3" variant="h3">
                  My account
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.rightTextPage} >
                <Breadcrumbs sx={{ color: "white" }} aria-label="breadcrumb">
                  <Typography sx={{ color: "white" }} component="h6" variant="h6">
                    Home
                  </Typography>
                  <Typography sx={{ color: "white" }} component="h6" variant="h6">
                    My account
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>

        <Box className={classes.formPage}>
           <Grid item lg={6}>
            <Typography component="h4" variant="h4">
              Login
            </Typography>
            <form onSubmit={formik.handleSubmit} className={classes.formLogin}>
            <Typography sx={{marginBottom:"15px",marginTop:"20px"}}>Username or email address *</Typography>
              <TextField 
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <Typography sx={{marginBottom:"15px",marginTop:"20px"}}>Password *</Typography>
              <TextField 
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              
              <Button color="primary" 
              variant="contained"  
              type="submit" 
              sx={{
                marginTop: "20px",
                borderRadius: "25px",
                width: "100px"
              }}>
                Login
              </Button>
              <Box>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />
                <Box>
                  <Typography component="span" variant="span">
                    <a href="#"> Lost your password?</a>
                  </Typography>
                </Box>
              </Box>
                
            </form>
          </Grid>
          <Grid item lg={6}>
            <Box className={classes.regisPage}>
              <Typography component="h4" variant="h4">
                Register
              </Typography>

              <FormControl className={classes.formLogin} variant="standard">
                <Typography sx={{ marginBottom: "15px", marginTop: "20px" }}>Username or email address *</Typography>
                <TextField  variant="outlined" type="text" name="name" label="Email"  />
                <Typography sx={{ marginBottom: "15px", marginTop: "20px" }}>Password *</Typography>
                <TextField  variant="outlined" type="password" name="password" label="Password" />
              </FormControl>
              <Box>
                <Button variant="contained"
                  sx={{
                    marginTop: "20px",
                    borderRadius: "25px",
                    width: "100px"
                  }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
}