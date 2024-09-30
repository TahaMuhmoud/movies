import { MutableRefObject, useRef, useState } from "react";
import "./CustomeSlider.css";
import { useSearchParams } from "react-router-dom";
interface CustomeSlider {
  min: number;
  max: number;
  step: number;
  minChange?: (min: number) => void;
  maxChange?: (max: number) => void;
  paramsMinName?: string;
  paramsMaxName?: string;
}
const CustomeSlider = ({
  min,
  max,
  step,
  minChange = () => {},
  maxChange = () => {},
  paramsMaxName,
  paramsMinName,
}: CustomeSlider) => {
  const [URLSearchParams] = useSearchParams();
  const minValParams =
    Number(URLSearchParams.get(paramsMinName || "") || 0) || undefined;
  const maxValParams =
    Number(URLSearchParams.get(paramsMaxName || "") || 0) || undefined;
  const [minVal, setMinVal] = useState<number>(minValParams || min);
  const [maxVal, setMaxVal] = useState<number>(maxValParams || max);
  const progress =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < maxVal) {
      progress.current.style.left = `${(Number(e.target.value) / max) * 100}%`;
      setMinVal(Number(e.target.value));
      minChange(minVal);
    }
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > minVal) {
      progress.current.style.right = `${
        100 - (Number(e.target.value) / max) * 100
      }%`;
      setMaxVal(Number(e.target.value));
      maxChange(maxVal);
    }
  };

  return (
    <div className="">
      <div className="mb-5 flex items-center justify-evenly">
        <div className="border-secondary w-fit rounded-lg border-2 p-2">
          {minVal}
        </div>
        <span>-</span>
        <div className="border-secondary w-fit rounded-lg border-2 p-2">
          {maxVal}
        </div>
      </div>
      <div className="slider bg-secondary/20 relative h-2 w-full rounded-full bg-white/30">
        <div
          ref={progress}
          className={`slider-progress bg-secondary absolute h-full rounded-full bg-primary`}
          style={{
            left: `${(minVal / max) * 100}%`,
            width: `${((maxVal - minVal) / max) * 100}%`,
          }}
        ></div>
      </div>
      <div className="relative">
        <input
          type="range"
          id="range-inp-1"
          title="d"
          step={step}
          value={minVal}
          min={min}
          max={max}
          className="range-inp pointer-events-none absolute -top-2 h-2 w-full appearance-none bg-transparent"
          onChange={handleMinChange}
        />
        <input
          type="range"
          id="range-inp-2"
          title="s"
          value={maxVal}
          step={step}
          min={min}
          max={max}
          className="range-inp pointer-events-none absolute -top-2 h-2 w-full appearance-none bg-transparent"
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default CustomeSlider;
