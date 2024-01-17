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
            <div className={classes.header}>
                <h1>rules</h1>
                <button className={[classes.closeButton, classes.hideOnSmall].join(" ")} onClick={closeModal}>
                    <IconClose />
                </button>
            </div>
            <div className={classes.rulesImg}>
                <img src={rules} alt="" />
            </div>
            <button
                className={[classes.closeButton, classes.hideOnLarge].join(" ")}
                onClick={closeModal}
            >
                <IconClose />
            </button>
        </div>
    );
};

export default Modal;
