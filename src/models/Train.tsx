import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

type TrainProp = {
    position: [number, number, number];
    scale: number;
};

const Train = (props: TrainProp) => {
    const model = useGLTF("/models/train.glb");
    const animations = useAnimations(model.animations, model.scene);

    useEffect(() => {
        animations.actions.Movement?.play();
    }, [animations.actions.Movement]);

    return (
        <mesh {...props}>
            <primitive object={model.scene} />
        </mesh>
    );
};

const Wolf = (props) => {
    const { action } = props;
    const model = useGLTF("/models/wolf.glb");
    const animations = useAnimations(model.animations, model.scene);

    useEffect(() => {
        if (action) {
            animations.mixer.stopAllAction();
            animations.actions[action]?.play();
        }
    }, [action, animations.actions, animations.mixer]);

    return (
        <mesh {...props}>
            <primitive object={model.scene} />
        </mesh>
    );
};

export { Train, Wolf };
