import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/styles";


const styles = () => ({
    "header": {
        "display": "flex",
        "justifyContent": "space-between",
        "margin": 20
    },
    "paragraph": {
        "color": "#9c4576",
        "fontSize": 24,
        "fontWeight": 600
    },
    "submit": {
        "height": 50,
        "width": 120
    }
});

class Header extends Component {

  logout = () => {

      localStorage.clear();

  };

  render () {

      const {classes} = this.props;

      return (
          <div className={classes.header}>
              <p className={classes.paragraph}>Welcome to the EPAM Chat Room</p>
              <form onSubmit={this.logout} className={classes.submit}>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                  >
       Log Out
                  </Button>
              </form>
          </div>
      );

  }

}

export default withStyles(styles)(Header);
