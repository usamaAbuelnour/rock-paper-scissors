import classes from "./Fist.module.scss";

const Fist = ({ type, pickHandler, playerPick, computerPick, win }) => {
    let fistStyle = [classes.outerCircle];

    let shadowColor;

    if (!type) fistStyle.push(classes.computerPick, classes.empty);
    else {
        if (type.name === "rock") {
            fistStyle.push(classes.rock);
            shadowColor = "hsl(349, 70%, 47%)";
            if (playerPick) fistStyle.push(classes.playerPick);
            else if (computerPick) fistStyle.push(classes.computerPick);
            else fistStyle.push(classes.rockFirstStage);
        } else if (type.name === "paper") {
            fistStyle.push(classes.paper);
            shadowColor = "hsl(230, 89%, 56%)";
            if (playerPick) fistStyle.push(classes.playerPick);
            else if (computerPick) fistStyle.push(classes.computerPick);
            else fistStyle.push(classes.paperFirstStage);
        } else if (type.name === "scissors") {
            fistStyle.push(classes.scissors);
            shadowColor = "hsl(40, 84%, 40%)";
            if (playerPick) fistStyle.push(classes.playerPick);
            else if (computerPick) fistStyle.push(classes.computerPick);
            else fistStyle.push(classes.scissorsFirstStage);
        }
    }

    let winFistStyle = {
        boxShadow: `inset 0 -5px ${shadowColor},
        0 0 2px 20px rgba(190, 190, 190, 0.1),
        0 0 2px 40px rgba(190, 190, 190, 0.1),
        0 0 2px 60px rgba(190, 190, 190, 0.1)`,
    };

    return (
        <div
            className={fistStyle.join(" ")}
            style={win ? winFistStyle : null}
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
