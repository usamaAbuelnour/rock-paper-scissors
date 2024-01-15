import classes from "./App.module.scss";
import Layout from "./Layout/Layout";
import Pick from "./Routes/Pick/Pick";
import Play from "./Routes/Play/Play";
import rock from "./assets/icon-rock.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
    const fists = [
        { id: 1, type: { name: "rock", icon: rock } },
        { id: 2, type: { name: "paper", icon: paper } },
        { id: 3, type: { name: "scissors", icon: scissors } },
    ];

    const [playerPick, setPlayerPick] = useState();

    const navigate = useNavigate();

    const pickHandler = (fist) => setPlayerPick(fist);

    const [score, setScore] = useState(0);

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const openModal = () => setModalIsVisible(true);
    const closeModal = () => setModalIsVisible(false);

    const mount = useRef(true);
    useEffect(() => {
        if (mount.current) mount.current = false;
        else {
            // navigate('/play', {state: playerPick});
            navigate("/play");
            console.log(playerPick);
        }
    }, [playerPick]);

    const increaseScore = () => setScore((prev) => ++prev);
    const decreaseScore = () => score > 0 && setScore((prev) => --prev);

    return (
        <Layout
            score={score}
            modalIsVisible={modalIsVisible}
            openModal={openModal}
            closeModal={closeModal}
        >
            <Routes>
                <Route
                    path=""
                    element={<Pick fists={fists} pickHandler={pickHandler} />}
                />
                <Route
                    path="play"
                    element={
                        <Play
                            fists={fists}
                            playerPick={playerPick}
                            score={score}
                            increaseScore={increaseScore}
                            decreaseScore={decreaseScore}
                        />
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
