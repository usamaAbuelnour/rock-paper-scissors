import classes from "./Pick.module.scss";
import triangle from "../../assets/bg-triangle.svg";
import Fist from "../../components/Fist/Fist";

import Playground from "../../Layout/Playground/Playground";

const Pick = ({fists, pickHandler}) => {

    return (
        <Playground>
            {fists.map((fist) => (
                <Fist key={fist.id} type={fist.type} pickHandler={pickHandler} />
            ))}
            <img style={{width: '100%'}} src={triangle} alt="" />
        </Playground>
    );
};

export default Pick;
