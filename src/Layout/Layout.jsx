import classes from "./Layout.module.scss";
import logo from "../assets/logo.svg";
import Modal from "../UI/Modal/Modal";
import { useEffect, useRef, useState } from "react";
const Layout = ({ children, score, modalIsVisible, openModal, closeModal }) => {
    const [height, setHeight] = useState(innerHeight);
    const mount = useRef(true);
    useEffect(()=>{
        if(mount.current) mount.current = false;
        else {setHeight(window.innerHeight)}
        // setHeight(window.innerHeight)
        // console.log('changed')
     }, [height])

     window.onresize = () => setHeight(innerHeight);
    return (
        <div className={classes.container} style={{height: `${height}px` }}>
            <Modal modalIsVisible={modalIsVisible} closeModal={closeModal}  />
            <header className={classes.header}>
                <div className={classes.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={classes.score}>
                    <p className={classes.text}>score</p>
                    <p className={classes.number}>{score}</p>
                </div>
            </header>
            {children}
            <button className={classes.rulesButton} onClick={openModal}>rules</button>
        </div>
    );
};

export default Layout;
