import { useEffect, useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
// import { Link } from "react-router-dom";

function Slider() {
  let arr = [
    "/mainBody/img1.avif",
    "/mainBody/img2.avif",
    "/mainBody/img3.avif",
    "/mainBody/img4.avif",
  ];
  let [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % arr.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  };
  
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };
  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, [arr.length]);
  const previousBtn = () => {
    setCurrentIndex((prevSlide) => (prevSlide - 1 + arr.length) % arr.length);
    stopTimer(); // Stop timer when manually changing slide
  };
  const nextBtn = () => {
    setCurrentIndex((prevSlide) => (prevSlide + 1) % arr.length);
    stopTimer(); // Stop timer when manually changing slide
  };
  return (
    <>
      <div className="bg-slate-300 text-center mt-52 sm:mt-40 md:mt-36 lg:mt-28 py-6">
        <p>
          <MdLocationOn className="inline mr-2 text-2xl cursor-pointer" /> We're
          evolving. SkinStore is becoming Dermstore, continue your skin health
          journey with the premier skin care authority.
        </p>
      </div>

      <div className="w-[90%] mx-auto relative ">
        <button onClick={previousBtn}>
          <GrPrevious className="absolute left-1 top-[50%] bg-slate-200 w-10 h-12" />
        </button>
        <img src={`${arr[currentIndex]}`} alt="img" />
        <button onClick={nextBtn} className="">
          <GrNext className="absolute right-1 top-[50%] bg-slate-200 w-10 h-12" />
        </button>
      </div>
    </>
  )
}

export default Slider
