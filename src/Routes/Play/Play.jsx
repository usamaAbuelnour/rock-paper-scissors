import Fist from "../../components/Fist/Fist";
import classes from "./Play.module.scss";
import Playground from "../../Layout/Playground/Playground";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Play = ({ fists, playerPick, increaseScore, decreaseScore }) => {
    // const playerPickNavigate = useLocation().state;

    const navigate = useNavigate();

    const [result, setResult] = useState("");

    const [computerPick, setComputerPick] = useState(false);
    useEffect(() => {
        play();
    }, []);

    const mount = useRef(true);
    useEffect(() => {
        if (mount.current) mount.current = false;
        else getResult();
    }, [computerPick]);

    const mount1 = useRef(true);
    useEffect(() => {
        if (mount1.current) mount1.current = false;
        else console.log(result);
    }, [result]);

    const play = () => {
        let randomPick = Math.floor(0 + Math.random() * 3);
        setTimeout(() => {
            setComputerPick(fists[randomPick].type);
        }, 500);
    };

    const getResult = () => {
        if (playerPick.name === "rock") {
            if (computerPick.name === "scissors") {
                setResult("win");
                increaseScore();
            } else if (computerPick.name === "paper") {
                setResult("lose");
                decreaseScore();
            } else setResult("draw");
        } else if (playerPick.name === "paper") {
            if (computerPick.name === "rock") {
                setResult("win");
                increaseScore();
            } else if (computerPick.name === "scissors") {
                setResult("lose");
                decreaseScore();
            } else setResult("draw");
        } else if (playerPick.name === "scissors") {
            if (computerPick.name === "paper") {
                setResult("win");
                increaseScore();
            } else if (computerPick.name === "rock") {
                setResult("lose");
                decreaseScore();
            } else setResult("draw");
        }
    };

    return (
        <Playground>
            <Fist type={playerPick} playerPick win={result === "win" && true} />
            <Fist
                type={computerPick}
                computerPick
                win={result === "lose" && true}
            />
            <div className={classes.labels}>
                <p>you picked</p>
                <p>the house picked</p>
            </div>
            <div className={classes.result}>
                {result && (
                    <>
                        <p>
                            {result === "win" || result === "lose"
                                ? `you ${result}`
                                : result}
                        </p>
                        <button
                            className={classes.playAgain}
                            onClick={() => navigate("/")}
                        >
                            play again
                        </button>
                    </>
                )}
            </div>
        </Playground>
    );
};

export default Play;
