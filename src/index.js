import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import StarRating1 from "./StarRating1";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <StarRating1
        color="blue"
        maxStarRating={10}
        onSetRating={setMovieRating}
      />
      <span>This movie was rated {movieRating} stars</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating1 maxStarRating={10} />
    <StarRating1
      size={28}
      color="green"
      maxStarRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating1 size={24} className="text" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
