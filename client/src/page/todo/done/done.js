import { convertRoutesToDataRoutes } from "@remix-run/router/dist/utils";
import React, {useState} from "react";

const Donelist = () => {

    const [dones, setDones] = useState([]);

    const addDone = done => {
        const newDone = [done, ...dones]

        setDones(newDone)
    };

    const completeDone = id => {
        dones.map(done => {
            if (done.id === id) {
                done.isComplete = !done.isComplete;
            }
            return done;
        })
        setDones(updatedDones);
    }
    return (
        <div>
            <h1>Donelist</h1>
        </div>
    )
};

export default Donelist;