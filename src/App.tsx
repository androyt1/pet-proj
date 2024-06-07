import { Train } from "./models/Train";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import About from "./About";

const App = () => {
    const { loaded } = useProgress();
    return (
        <>
            <div className='w-full h-screen relative overflow-x-hidden'>
                <div className='w-full h-full bg-black'>
                    <Canvas
                        className='w-full h-full'
                        camera={{ fov: 2, far: 1000, near: 0.01, position: [0, 1.5, 10] }}>
                        <Suspense
                            fallback={
                                <Html>
                                    <div className='absolute top-0 left-0 h-screen w-screen bg-black  text-white text-xl flex justify-start items-start'>
                                        <span>loading {loaded} % ....</span>
                                    </div>
                                </Html>
                            }>
                            <Train position={[-0.72, -0.172, 0]} scale={2.2} />
                        </Suspense>
                        <ambientLight intensity={5} />
                    </Canvas>
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-stone-950/50 px-3'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold uppercase text-stone-100 drop-shadow-md '>
                        Life is a Journey
                    </h1>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-orange-300 font-semibold mt-4'>
                        It always starts with a conscious decision
                    </h2>
                    <p className='text-stone-300 max-w-3xl text-xl mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae
                        blanditiis ad doloribus doloremque omnis corrupti dolores temporibus cum
                        neque ratione, ipsum praesentium debitis eum quaerat illum cupiditate! Et,
                        consequatur.
                    </p>
                </div>
            </div>
            <About />
        </>
    );
};

export default App;
