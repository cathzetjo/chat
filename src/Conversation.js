import React, {Component} from "react";
import moment from "moment";
import {withStyles} from "@material-ui/styles";

const styles = () => ({
    "@global": {
        "*::-webkit-scrollbar": {
            "width": "1em"
        },
        "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.2)"
        },
        "*::-webkit-scrollbar-thumb": {
            "backgroundColor": "rgba(26, 24, 58, .6)",
            "outline": "1px solid #a4bcd1"
        }
    },
    "dataBlock": {
        "fontWeight": "bold"
    },
    "paragraph": {
        "margin": 30,
        "padding": "10px 10px",
        "borderRadius": 10,
        "backgroundColor": "#969bce91",
        "maxWidth": "fit-content",
        "boxShadow": "0.4em 0.4em 5px #7a7a7a80"
    },
    "date": {
        "paddingBottom": 7
    },
    "msg": {
        "fontStyle": "italic"
    }
});

class Conversation extends Component {

    render () {

        const {classes} = this.props;
        return (
            <div>
                {this.props.messages.map((message) => <div key={message.id} className={classes.paragraph}>
                    <p className={classes.date}>
            ({moment(message.time).format("D.MM.YY, hh:mm")})</p>
                    <p className={classes.dataBlock}> {message.from} : <span className={classes.msg}> {message.message}</span></p> </div>)}
            </div>
        );

    }

}

export default withStyles(styles)(Conversation);
