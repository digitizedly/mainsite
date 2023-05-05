import { useMemo } from "react";
import Canvas from "./UI/Canvas";

export interface RainCanvasProps {
  height: number;
}

const CANVAS_WIDTH = window.innerWidth;

const letters = "01";
const lettersArray = letters.split("");

const RainCanvas = (props: RainCanvasProps) => {
  const { height } = props;
  // Setting up the columns
  const fontSize = 32,
    columns = CANVAS_WIDTH / fontSize;

  // Setting up the drops
  const drops: Array<number> = useMemo(() => {
    return new Array(Math.floor(columns)).fill(0);
  }, []);

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, CANVAS_WIDTH, height);
    for (var i = 0; i < drops.length; i++) {
      var text = lettersArray[i % lettersArray.length];
      ctx.fillStyle = "#000000";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > height && Math.random() > 0.99) {
        drops[i] = 0;
      }
    }
  };

  return (
    <Canvas
      draw={draw}
      width={CANVAS_WIDTH}
      height={height}
      fontSize={fontSize}
    />
  );
};

export default RainCanvas;
