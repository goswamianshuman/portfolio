import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Island, Plane, Sky, Bird } from "../models";
import {
  adjustIslandForScreenSize,
  adjustPlaneForScreenSize,
} from "../utils/adjustSizes";
import PopupInfo from "../components/PopupInfo";
import audio from "../assets/audio.mp3";
import { soundoff, soundon } from "../assets/icons";

const home = () => {
  const audioRef = useRef(new Audio(audio));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    if (isPlayingAudio) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingAudio]);

  return (
    <section className="h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <PopupInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-full bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky isRotating={isRotating} />
          <Bird />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
          <Island
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-3 right-3">
        <img
          src={!isPlayingAudio ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-center"
          onClick={() => {
            setIsPlayingAudio(!isPlayingAudio);
          }}
        />
      </div>
    </section>
  );
};

export default home;
