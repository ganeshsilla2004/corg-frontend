// import React from "react";
// import Spline from "@splinetool/react-spline";

// const Hero: React.FC = () => {
//   return (
//     <header className="header">
//       <Spline scene="https://prod.spline.design/fQgVctxq5ZlqMt2o/scene.splinecode" />
//     </header>
//   );
// };

// export default Hero;
import React from "react";
import Spline from "@splinetool/react-spline";

const Hero: React.FC = () => {
  return (
    <>
      <header className="header">
        <Spline scene="https://prod.spline.design/fQgVctxq5ZlqMt2o/scene.splinecode" />
      </header>

      {/* Mobile fallback */}
      <div className="mob1">
        <img src="/assets/mob1.png" alt="Mobile Hero" />
      </div>
    </>
  );
};

export default Hero;