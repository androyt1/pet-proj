import { Wolf } from "./models/Train";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

type WolfStateProp = "01_Run" | "02_walk" | "03_creep" | "04_Idle" | "05_sit";

const About = () => {
    const buttonStates = [
        { label: "Run", state: "01_Run" },
        { label: "Walk", state: "02_walk" },
        { label: "Creep", state: "03_creep" },
        { label: "Idle", state: "04_Idle" },
        { label: "Sit", state: "05_sit" },
    ];

    const [selectedState, setSelectedState] = useState<WolfStateProp | null>(null);
    const [wolfState, setWolfState] = useState<WolfStateProp>("02_walk");

    const handleButtonClick = (state: WolfStateProp) => {
        setSelectedState(state);
        setWolfState(state);
    };

    return (
        <section className='h-screen w-full overflow-x-hidden relative'>
            <Canvas
                className='w-full h-full flex justify-center items-center bg-white'
                camera={{ fov: 1 }}>
                <Wolf scale={2} rotation={[0, Math.PI * 1.5, 0]} action={wolfState} />
                <ambientLight intensity={3} />
            </Canvas>
            <div className='absolute top-0 right-0 h-[300px] w-[200px] flex flex-col gap-4 justify-center'>
                {buttonStates.map(({ label, state }) => (
                    <button
                        key={state}
                        onClick={() => handleButtonClick(state)}
                        className={`py-2 px-4 rounded ${
                            selectedState === state ? "bg-blue-400" : ""
                        }`}>
                        {label}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default About;
