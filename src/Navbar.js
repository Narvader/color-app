import React, { Component } from 'react';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Navbar.css";

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
        const { level, changeLevel } = this.props;
        const { format } = this.state
        return(
            <header className="Navbar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className="slider">
                    <div className="slider-container">
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
                <div className="select-container">
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

export default Navbar;