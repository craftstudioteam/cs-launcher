import React, { useState, useEffect } from 'react';

const PHRASES = [
  "Minecraft Java on Android",
  "Smooth 60+ FPS Gameplay",
  "Custom Skins & HD Capes",
  "Official V3 Release Build"
];

export default function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIdx];
    let timer;

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Pause at full text
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIdx]);

  return (
    <span className="typewriter-container">
      <span>{displayText}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
