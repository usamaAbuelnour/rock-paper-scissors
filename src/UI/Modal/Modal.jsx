import classes from "./Modal.module.scss";
import rules from "../../assets/image-rules.svg";
import IconClose from "../../assets/SVGs/IconClose/IconClose";
const Modal = ({ modalIsVisible, closeModal }) => {
    return (
        <div
            className={[
                classes.container,
                !modalIsVisible && classes.close,
            ].join(" ")}
        >
            <h1>rules</h1>
            <div className={classes.rulesImg}>
                <img src={rules} alt="" />
            </div>
            <button className={classes.closeButton} onClick={closeModal}>
                <IconClose />
            </button>
        </div>
    );
};

export default Modal;
