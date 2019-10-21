import React, {Component} from "react";
import "./App.css";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/styles";

const styles = () => ({

    "avatar": {
        "marginBottom": 30,
        "backgroundColor": "inherit",
        "marginTop": "15%",
        "backgroundImage": "url(https://ru.seaicons.com/wp-content/uploads/2015/10/chat-bubbles-icon.png)",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
    },

    "form": {
        "display": "contents"
    },
    "h1": {
        "color": "#1d1e5b",
        "marginBottom": 60
    },
    "image": {
        "backgroundImage": "url(https://source.unsplash.com/random)",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "auto"
    },
    "info": {
        "color": "#1d1e5b",
        "fontSize": 12,
        "fontStyle": "italic",
        "marginTop": "30%",
        "textAlign": "center"
    },
    "paper": {
        "alignItems": "center",
        "display": "flex",
        "flexDirection": "column",
        "margin": "10%"
    },
    "root": {
        "backgroundColor": "none",
        "height": "100vh"
    },
    "submit": {
        "height": 43,
        "marginTop": 30,
        "width": 120
    }
});

class Login extends Component {

   login = (event) => {

       event.preventDefault();
       this.props.setUserName(event.target.from.value);
       localStorage.setItem("from", event.target.from.value);

   };

   render () {

       const {classes} = this.props;

       return (

           <Grid container component="main" className={classes.root}>
               <CssBaseline />
               <Grid item xs={false} sm={4} md={7} className={classes.image} />
               <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                   <div className={classes.paper}>
                       <Avatar className={classes.avatar}>
                       </Avatar>
                       <Typography component="h1" variant="h5" className={classes.h1}>
             Welcome to the Chat Room
                       </Typography>
                       <form className={classes.form} onSubmit={this.login}>
                           <TextField
                               variant="outlined"
                               margin="dense"
                               required
                               fullWidth
                               id="from"
                               label="Enter your name"
                               name="from"
                               autoComplete="log in"
                               autoFocus
                           />
                           <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                               className={classes.submit}
                           >
               Log In
                           </Button>

                           <Box mt={5}>
                           </Box>
                       </form>
                       <p className={classes.info}>
                         This App created by the student of the Rolling Scopes School <br/>
                         Katerina Zhadko, 08.2019 </p>
                   </div>
               </Grid>
           </Grid>
       );

   }

}

export default withStyles(styles)(Login);
