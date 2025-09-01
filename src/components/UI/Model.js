import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import classes from './Model.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModelOverlay = (props) => {
    return( 
        <div className={classes.model}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Model = (props) => {
    const portalElement=document.getElementById('overlays')
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>
                {props.children}
            </ModelOverlay>, portalElement)}
        </Fragment>
    )
}

export default Model