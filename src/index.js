import React from "react";
import ReactDOM from "react-dom/client";

import StarRating1 from "./StarRating1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating1 maxStarRating={10} />
    <StarRating1 maxStarRating={5} />
    <StarRating1 />
  </React.StrictMode>
);
