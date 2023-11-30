import React from "react";
import ReactDOM from "react-dom/client";

import StarRating1 from "./StarRating1";

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
    <StarRating1 size={24} className="text" />
  </React.StrictMode>
);
