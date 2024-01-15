import classes from "./Layout.module.scss";
import logo from "../assets/logo.svg";
import Modal from "../UI/Modal/Modal";
const Layout = ({ children, score, modalIsVisible, openModal, closeModal }) => {
    return (
        <div className={classes.container}>
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
