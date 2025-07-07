import React from "react";
import { useSelector } from "react-redux";
import darkInterior from "../../assets/images/model-y-interior-dark.jpg";
import lightInterior from "../../assets/images/model-y-interior-light.jpg";

const interior_image_paths = new Map();
interior_image_paths.set("darkInterior", darkInterior);
interior_image_paths.set("lightInterior", lightInterior);

const InteriorColourDisplay = () => {
  const { selectedInteriorColour } = useSelector((state) => state.model_y);
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={interior_image_paths.get(`${selectedInteriorColour}`)} />
          <span className="card-title custom-card-title">Model Y Interior</span>
        </div>
      </div>
    </div>
  );
};

export default InteriorColourDisplay;
