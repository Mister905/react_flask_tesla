import React from "react";
import { useSelector } from "react-redux";
import stealthGrey from "../../assets/images/model-y-stealth-grey.jpg";
import stealthGreyPerformance from "../../assets/images/model-y-stealth-grey-performance.jpg";
import pearlWhite from "../../assets/images/model-y-pearl-white.jpg";
import pearlWhitePerformance from "../../assets/images/model-y-pearl-white-performance.jpg";
import deepBlue from "../../assets/images/model-y-deep-blue-metallic.jpg";
import deepBluePerformance from "../../assets/images/model-y-deep-blue-metallic-performance.jpg";
import solidBlack from "../../assets/images/model-y-solid-black.jpg";
import solidBlackPerformance from "../../assets/images/model-y-solid-black-performance.jpg";
import ultraRed from "../../assets/images/model-y-ultra-red.jpg";
import ultraRedPerformance from "../../assets/images/model-y-ultra-red-performance.jpg";
import quickSilver from "../../assets/images/model-y-quicksilver.jpg";
import quickSilverPerformance from "../../assets/images/model-y-quicksilver-performance.jpg";

const exterior_image_paths = new Map();
exterior_image_paths.set("stealthGrey", stealthGrey);
exterior_image_paths.set("stealthGreyPerformance", stealthGreyPerformance);
exterior_image_paths.set("pearlWhite", pearlWhite);
exterior_image_paths.set("pearlWhitePerformance", pearlWhitePerformance);
exterior_image_paths.set("deepBlue", deepBlue);
exterior_image_paths.set("deepBluePerformance", deepBluePerformance);
exterior_image_paths.set("solidBlack", solidBlack);
exterior_image_paths.set("solidBlackPerformance", solidBlackPerformance);
exterior_image_paths.set("ultraRed", ultraRed);
exterior_image_paths.set("ultraRedPerformance", ultraRedPerformance);
exterior_image_paths.set("quickSilver", quickSilver);
exterior_image_paths.set("quickSilverPerformance", quickSilverPerformance);

const ExteriorColourDisplay = () => {
  const { selectedExteriorColour, selectedWheelType } = useSelector(
    (state) => state.model_y
  );

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img
            src={exterior_image_paths.get(
              `${selectedExteriorColour}${
                selectedWheelType === "performanceWheels" ? "Performance" : ""
              }`
            )}
          />
          <span className="card-title custom-card-title custom-card-title-dark">
            Model Y Exterior
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExteriorColourDisplay;
