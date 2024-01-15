import classes from "./Playground.module.scss";

import React from "react";

const Playground = ({ children }) => {
    return (
        <div className={classes.container}>
            <div
                className={classes.subContainer}
            >
                {children}
            </div>
        </div>
    );
};

export default Playground;
