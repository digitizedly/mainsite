import { useEffect, useRef } from "react";

export interface CanvasProps {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
  style?: Record<string, any>;
  width: number;
  height: number;
  fontSize?: number;
}

const match = /(?<value>\d+\.?\d*)/;

const Canvas = (props: CanvasProps) => {
  const { draw, width, height, fontSize, ...otherProps } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { devicePixelRatio: ratio = 1 } = window;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    canvas.width = width * ratio;
    canvas.height = height;
    context.scale(ratio, ratio);
    context.font = context.font.replace(match, fontSize?.toString() || "64");
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let frameCount = 0;
    let animationFrameId: number;

    //Our draw came here
    const render = () => {
      frameCount++;
      setTimeout(() => {
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      }, 50);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...otherProps} />;
};

export default Canvas;
