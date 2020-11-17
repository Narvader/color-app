import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from "@material-ui/styles";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from 'rc-slider';

import styles from "./styles/NavbarStyles";
import 'rc-slider/assets/index.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "hex", open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);    
    }
    closeSnackbar() {
        this.setState({ open: false });
    }
    handleFormatChange(e){
        this.setState({ open: true, format: e.target.value});
        this.props.handleChange(e.target.value);
        
    }
    
    render() {
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format } = this.state
        return(
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">reactcolorpicker</Link>
                </div>
                {showingAllColors && (
                    <div className={classes.slider}>
                        <div>
                            <span>Level: {level}</span>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={changeLevel} 
                        />
                        </div>
                        
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #fff</MenuItem>
                        <MenuItem value="rgb">RGB - (255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - (255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={
                        <span id='message-id'>
                        Format Changed To {format.toUpperCase()}
                        </span>
                    }
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                        onClick={this.closeSnackbar}
                        color='inherit'
                        key='close'
                        aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                    />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar);