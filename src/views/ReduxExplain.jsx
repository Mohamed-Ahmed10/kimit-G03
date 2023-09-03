import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SiteNav from "../layout/SiteNav";
import { Button } from "react-bootstrap";
import { INCREAMENT, DECREAMENT } from "../redux/actions/types";

export default function ReduxExplain() {

    // const [counter, setCounter] = useState(0)

    const countState = useSelector((state) => state.count)
    const dispatch = useDispatch();

    let handleIncrease = () => {
        // setCounter(counter + 1)
        dispatch({ type: INCREAMENT })
    }
    let handleDecrease = () => {
        // setCounter(counter - 1)
        dispatch({ type: DECREAMENT })
    }

    return (
        <div className="mainContent text-center">
            <SiteNav />
            <h2>ReduxExplain</h2>
            <div className="d-flex justify-content-between w-50">
                <Button variant="primary" onClick={handleIncrease}>+</Button>
                {/* <div>{counter}</div> */}
                <div>{countState}</div>
                <Button variant="info" onClick={handleDecrease}>-</Button>
            </div>
        </div>
    )
}
