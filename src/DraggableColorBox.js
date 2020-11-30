import React from 'react';
import {SortableElement} from "react-sortable-hoc";
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin:"0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-5.5px",
        "&:hover svg":{
            color: "white",
            transform: "scale(1.4)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "color .3s ease-in-out, transform .3s ease-in-out"
    }
}

 const DraggableColorBox = SortableElement(props => {
    const { classes, handleClick, name, color } = props;
    return(
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span>
                    <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
                </span>
            </div>
            
        </div>
    );
})

export default withStyles(styles)(DraggableColorBox);
