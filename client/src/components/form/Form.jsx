import React, { useEffect } from "react";
import button_stealth_grey from "../../assets/images/button-stealth-grey.avif";
import button_pearl_white from "../../assets/images/button-pearl-white.avif";
import button_deep_blue from "../../assets/images/button-deep-blue-metallic.avif";
import button_solid_black from "../../assets/images/button-solid-black.avif";
import button_ultra_red from "../../assets/images/button-ultra-red.avif";
import button_quicksilver from "../../assets/images/button-quicksilver.avif";
import button_dark from "../../assets/images/button-dark.avif";
import button_light from "../../assets/images/button-light.avif";
import { useDispatch, useSelector } from "react-redux";
import {
  select_exterior_colour,
  select_interior_colour,
  select_wheel_type,
  select_full_self_driving,
  select_performance_package,
  select_center_console_trays,
  select_all_weather_interior_liners,
  select_sunshade,
  update_time,
} from "../../actions/model_y";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update_time());
  }, []);

  const {
    selectedExteriorColour,
    selectedInteriorColour,
    selectedWheelType,
    hasFullSelfDriving,
    hasPerformancePackage,
    hasCenterConsoleTrays,
    hasSunshade,
    hasAllWeatherInteriorLiners,
  } = useSelector((state) => state.model_y);

  function handleExteriorClick(e) {
    const id = e.target.id;
    dispatch(select_exterior_colour(id));
  }

  function handleInteriorClick(e) {
    const id = e.target.id;
    dispatch(select_interior_colour(id));
  }

  function handleWheelsClick(e) {
    const id = e.target.id;
    if (selectedWheelType !== id) {
      dispatch(select_wheel_type(id));
    }
  }

  function handleFullSelfDrivingClick(e) {
    dispatch(select_full_self_driving());
  }

  function handlePerformancePackageClick() {
    dispatch(select_performance_package());
  }

  function handleCenterConsoleTraysClick() {
    dispatch(select_center_console_trays());
  }

  function handleSunshadeClick() {
    dispatch(select_sunshade());
  }

  function handleAllWeatherInteriorLinerClick() {
    dispatch(select_all_weather_interior_liners());
  }

  return (
    <div>
      <div className="row">
        <div className="col 12">
          <div>Model Y</div>
        </div>
      </div>

      <div className="row">
        <div className="col 12">
          <div>Customize Your Car</div>
        </div>
      </div>

      <div className="row">
        <div className="col 12">
          <div>Exterior Colour</div>
        </div>
      </div>

      <div className="row">
        <div className="col m2">
          <a>
            <img
              id="stealthGrey"
              src={button_stealth_grey}
              alt="Stealth Grey"
              className={
                "circle responsive-img " +
                (selectedExteriorColour === "stealthGrey" ? "btn-selected" : "")
              }
              onClick={handleExteriorClick}
            />
          </a>
        </div>
        <div className="col m2">
          <a>
            <img
              id="pearlWhite"
              src={button_pearl_white}
              alt="Pearl White"
              className={
                "circle responsive-img " +
                (selectedExteriorColour === "pearlWhite" ? "btn-selected" : "")
              }
              onClick={handleExteriorClick}
            />
          </a>
        </div>
        <div className="col m2">
          <a>
            <img
              id="deepBlue"
              src={button_deep_blue}
              alt="Deep Blue"
              className={
                "circle responsive-img " +
                (selectedExteriorColour === "deepBlue" ? "btn-selected" : "")
              }
              onClick={handleExteriorClick}
            />
          </a>
        </div>
        <div className="col m2">
          <a>
            <img
              id="solidBlack"
              src={button_solid_black}
              alt="Solid Black"
              className={
                "circle responsive-img " +
                (selectedExteriorColour === "solidBlack" ? "btn-selected" : "")
              }
              onClick={handleExteriorClick}
            />
          </a>
        </div>
        <div className="col m2">
          <a>
            <img
              id="ultraRed"
              src={button_ultra_red}
              alt="Ultra Red"
              className={
                "circle responsive-img " +
                (selectedExteriorColour === "ultraRed" ? "btn-selected" : "")
              }
              onClick={handleExteriorClick}
            />
          </a>
        </div>
        <div className="col m2">
          <a>
            <img
              id="quickSilver"
              src={button_quicksilver}
              alt="Quicksilver"
              className={
                "circle responsive-img " +
                (selectedExteriorColour === "quicksilver" ? "btn-selected" : "")
              }
              onClick={handleExteriorClick}
            />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col 12">
          <div>Interior Colour</div>
        </div>
      </div>

      <div className="row">
        <div className="col m2">
          <a>
            <img
              id="darkInterior"
              src={button_dark}
              className={
                "circle responsive-img " +
                (selectedInteriorColour === "darkInterior"
                  ? "btn-selected"
                  : "")
              }
              onClick={handleInteriorClick}
            />
          </a>
        </div>
        <div className="col m2">
          <a>
            <img
              id="lightInterior"
              src={button_light}
              className={
                "circle responsive-img " +
                (selectedInteriorColour === "lightInterior"
                  ? "btn-selected"
                  : "")
              }
              onClick={handleInteriorClick}
            />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col 12">
          <div>Wheels</div>
        </div>
      </div>

      <div className="row">
        <div className="col m12">
          <div className="collection">
            <a
              href="#!"
              className={`collection-item collection-item-custom ${
                selectedWheelType === "standardWheels" ? "active" : ""
              }`}
              id="standardWheels"
              onClick={handleWheelsClick}
            >
              Standard Wheels
            </a>
            <a
              href="#!"
              className={`collection-item collection-item-custom ${
                selectedWheelType === "performanceWheels" ? "active" : ""
              }`}
              id="performanceWheels"
              onClick={handleWheelsClick}
            >
              Performance Wheels (+$2,500)
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col 12">
          <div>Full Self-Driving</div>
        </div>
      </div>

      <div className="row">
        <div className="col m12 card">
          <div className="collection">
            <a href="#!" className="collection-item collection-item-custom">
              <p>
                <label>
                  <input
                    id="hasFullSelfDriving"
                    type="checkbox"
                    onChange={handleFullSelfDrivingClick}
                    checked={hasFullSelfDriving}
                  />
                  <span>Add Full Self-Driving (+$8,500)</span>
                </label>
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col 12">
          <div>Performance Package</div>
        </div>
      </div>

      <div className="row">
        <div className="col m12 card">
          <div className="collection">
            <a
              href="#!"
              className={`collection-item collection-item-custom ${
                hasPerformancePackage === true ? "active" : ""
              }`}
              onClick={handlePerformancePackageClick}
            >
              Performance Upgrade (+$5,000)
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col m12 card">
          <div>Accessories</div>
          <div className="collection">
            <a href="#!" className="collection-item collection-item-custom row">
              <div className="col m6">Center Console Trays</div>
              <div className="col m6">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleCenterConsoleTraysClick}
                      checked={hasCenterConsoleTrays}
                    />
                    <span>+$35</span>
                  </label>
                </p>
              </div>
            </a>
            <a href="#!" className="collection-item collection-item-custom row">
              <div className="col m6">Sunshade</div>
              <div className="col m6">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleSunshadeClick}
                      checked={hasSunshade}
                    />
                    <span>+$105</span>
                  </label>
                </p>
              </div>
            </a>
            <a href="#!" className="collection-item collection-item-custom row">
              <div className="col m6">All-Weather Interior Liners</div>
              <div className="col m6">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      onChange={handleAllWeatherInteriorLinerClick}
                      checked={hasAllWeatherInteriorLiners}
                    />
                    <span>+$225</span>
                  </label>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
