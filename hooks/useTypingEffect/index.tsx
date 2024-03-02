import { useState, useEffect } from "react";

const useTypingEffect = (text: string, typingSpeed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (index === text.length) {
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, index + 1));
      setIndex(index + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, text, typingSpeed]);

  return displayText;
};

export default useTypingEffect;
