import React from "react";

const Slide = ({ children, direction = "bottom" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const slideRef = React.useRef(null);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Stop observing once the component is in view
      }
    },
    { threshold: 0.1 } // Adjust threshold as needed
  );
  React.useEffect(() => {
    observer.observe(slideRef.current); // Observe the component

    return () => {
      observer.disconnect(); // Disconnect the observer when component unmounts
    };
  }, []);

  return (
    <div
      ref={slideRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translate${
          direction === "left" || direction === "right" ? "X" : "Y"
        }(${
          isVisible
            ? "0"
            : direction === "left" || direction === "top"
            ? "-100px"
            : "100px"
        })`,
        transition: "opacity 1s ease, transform 1s ease",
        position: "relative", // Adjusted to maintain content visibility
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
