import React, {Component} from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import {withStyles} from "@material-ui/styles";


const styles = () => ({
    "margin": {
        "margin": 10
    },
    "withoutLabel": {
        "marginTop": 30
    },
    "textField": {
        "flexBasis": 200
    },
    "textArea": {
        "maxWidth": "95%",
        "alignItems": "center",
        "margin": "30px auto",
        "backgroundColor": "#e7e8ebad",
        "paddingRight": 20,
        "borderRadius": 15,
        "boxShadow": "0 0 5px"
    },
    "title": {
        "marginLeft": "40%"
    }
});

class TextArea extends Component {

  messageHandler = (event) => {

      if (event.key === "Enter") {

          event.preventDefault(); // No refresh the page
          this.props.sendMessage(event.target.value);
          event.target.value = ""; // Clear the text area

      }

  };

  render () {

      const {classes} = this.props;
      return (
          <div id="textArea" className={classes.textArea}>
              <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="textBox" className={classes.title}>Type your message and then press ENTER</InputLabel>
                  <Input
                      id="textBox"
                      onKeyDown={this.messageHandler}
                      startAdornment={<InputAdornment position="start"> Me: </InputAdornment>}
                  />
              </FormControl>
          </div>
      );

  }

}

export default withStyles(styles)(TextArea);
