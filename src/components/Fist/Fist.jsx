import classes from "./Fist.module.scss";

const Fist = ({ type, pickHandler, playerPick, computerPick, win }) => {
    let fistStyle = [classes.outerCircle];

    if (!type) fistStyle.push(classes.computerPick, classes.empty);
    else {
        if (type.name === "rock") {
            fistStyle.push(classes.rock);
            if (playerPick) fistStyle.push(classes.playerPick);
            else if (computerPick) fistStyle.push(classes.computerPick);
            else fistStyle.push(classes.rockFirstStage);
        } else if (type.name === "paper") {
            fistStyle.push(classes.paper);
            if (playerPick) fistStyle.push(classes.playerPick);
            else if (computerPick) fistStyle.push(classes.computerPick);
            else fistStyle.push(classes.paperFirstStage);
        } else if (type.name === "scissors") {
            fistStyle.push(classes.scissors);
            if (playerPick) fistStyle.push(classes.playerPick);
            else if (computerPick) fistStyle.push(classes.computerPick);
            else fistStyle.push(classes.scissorsFirstStage);
        }
    }
    if (win) fistStyle.push(classes.win);

    return (
        <div
            className={fistStyle.join(" ")}
            onClick={
                playerPick || computerPick
                    ? () => {}
                    : () => {
                          pickHandler(type);
                      }
            }
        >
            <div className={classes.innerCircle}>
                <div className={classes.fist}>
                    <img
                        src={type.icon}
                        alt=""
                        style={{ display: !type && "none" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Fist;
