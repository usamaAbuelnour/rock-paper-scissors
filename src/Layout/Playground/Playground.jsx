import classes from "./Playground.module.scss";

import React from "react";

const Playground = ({ children, play }) => {
    return (
        <div className={[classes.container, play && classes.largeScreen].join(' ')}>
            <div
                className={classes.subContainer}
            >
                {children}
            </div>
        </div>
    );
};

export default Playground;
