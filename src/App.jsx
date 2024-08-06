import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Menunggu Dearly Di 2033✨"]);

  const [showParticles, setShowParticles] = useState(false);
  const [playVideo, setPlayVideo] = useState(true);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLine() {
    const newYearDate = new Date("January 1, 2033 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;

    if (remainingTime <= 0 && playVideo) {
      setShowParticles(true);
      setPlayVideo(false);
    }

    return remainingTime;
  }

  useEffect(() => {
    if (showParticles) {
      setNewYearMessage([
        "Selamat Tahun Baru 🥳🎉💖",
        "Anda Sekarang di Tahun 2033",
      ]);
    }
  }, [showParticles]);

  return (
    <div className="app-container">
      {showParticles ? (
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
      ) : (
        <video
          width="100%"
          height="100%"
          src="Menjelajahi Indonesia.mp4"
          frameBorder="0"
          allowFullScreen
          autoPlay
          loop
          muted
          style={{ position: "absolute", objectFit: "cover" }}
        ></video>
      )}
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50 px-4">
          <Typewriter cursor loop cursorStyle="_" words={newYearMessage} />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLine()}
            onComplete={() => setShowParticles(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
