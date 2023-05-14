import React, { useEffect, useRef, useState } from "react";
import svgimageone from "../../assets/img/carousel/business-investment.svg";
import svgimagetwo from "../../assets/img/carousel/intrest-on-loan.svg";
import svgimagethree from "../../assets/img/carousel/interest-loan-calculator.svg";

const database = [
  {
    id: 1,
    image: svgimageone,
    quote: "Permintaan pinjaman yang sangat mudah untuk dilakukan",
  },
  {
    id: 2,
    image: svgimagetwo,
    quote:
      "Bagikan dan raih imbal hasil dengan ketentuan yang jelas serta tanpa ria",
  },
  {
    id: 3,
    image: svgimagethree,
    title: "product designer",
    quote:
      "Pendanaan tanpa harus menunggu pinjaman tersedia dengan fitur auto lend",
  },
];
const delay = 2000;

const CarouselImg = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === database.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative flex items-center justify-center lg:h-96 overflow-hidden rounded-lg md:h-96 ">
          {database.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  index === idx ? "" : "hidden"
                } ease-in-out flex flex-col`}
                data-carousel-item
              >
                <img
                  src={item.image}
                  className="block w-full h-full"
                  alt="..."
                />

                <span>ADKADJAJDMAJDIA DIA JDIA{item.quote}</span>
              </div>
            );
          })}

          {/* <div className="hidden duration-100 ease-in-out" data-carousel-item>
            <img
              src={svgimagetwo}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div> */}
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
      </div>
    </>
  );
};

export default CarouselImg;
