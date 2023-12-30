import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState([
    "Menunggu 2024...✨",
  ]);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLine() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ 
          preset: "fireworks",
          particles: {
            number: {
              value: 1,
            },
          },
        }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50 px-4">
          <Typewriter cursor loop cursorStyle="_" words={newYearMessage} />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLine()}
            onComplete={() =>
              setNewYearMessage([
                "Selamat Tahun Baru 🥳🎉💖",
                "Anda Sekarang di Tahun 2024",
                "Selamat Tinggal 2023😢🌹"
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
