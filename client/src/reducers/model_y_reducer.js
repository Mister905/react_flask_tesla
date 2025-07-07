import {
  SELECTED_EXTERIOR_COLOUR,
  SELECTED_INTERIOR_COLOUR,
  SELECTED_WHEEL_TYPE,
  SELECTED_FULL_SELF_DRIVING,
  SELECTED_PERFORMANCE_PACKAGE,
  SELECTED_CENTER_CONSOLE_TRAYS,
  SELECTED_SUNSHADE,
  SELECTED_ALL_WEATHER_INTERIOR_LINERS,
  UPDATE_DOWN_PAYMENT,
  UPDATE_MONTHLY_PAYMENT,
  UPDATE_LOAN_AMOUNT,
  UPDATE_TIME,
} from "../actions/types";

const initial_state = {
  selectedExteriorColour: "stealthGrey",
  selectedInteriorColour: "darkInterior",
  selectedWheelType: "standardWheels",
  hasFullSelfDriving: false,
  hasPerformancePackage: false,
  hasCenterConsoleTrays: false,
  hasSunshade: false,
  hasAllWeatherInteriorLiners: false,
  totalPrice: 52490, // initialized to the base price,
  downPayment: 52490 * 0.1,
  monthlyPayment: 0,
  loanTermMonths: 60,
  interestRate: 0.03,
  loanAmount: 52490 - 52490 * 0.1,
  monthlyInterestRate: 0.03 / 12,
  // Monthly payment formula: P * (r(1+r)^n) / ((1+r)^n - 1)
  monthlyPayment:
    ((52490 - 52490 * 0.1) * ((0.03 / 12) * Math.pow(1 + 0.03 / 12, 60))) /
    (Math.pow(1 + 0.03 / 12, 60) - 1),
  time: "",
};

// Use the initial_state as a default value
export default function (state = initial_state, action) {
  const { type, payload } = action;
  switch (action.type) {
    case SELECTED_EXTERIOR_COLOUR:
      return {
        ...state,
        selectedExteriorColour: payload,
      };
    case SELECTED_INTERIOR_COLOUR:
      return {
        ...state,
        selectedInteriorColour: payload,
      };
    case SELECTED_WHEEL_TYPE:
      return {
        ...state,
        selectedWheelType: payload,
        totalPrice:
          payload === "performanceWheels"
            ? (state.totalPrice += 2500)
            : (state.totalPrice -= 2500),
      };
    case SELECTED_FULL_SELF_DRIVING:
      return {
        ...state,
        hasFullSelfDriving: !state.hasFullSelfDriving,
        totalPrice: !state.hasFullSelfDriving
          ? (state.totalPrice += 8500)
          : (state.totalPrice -= 8500),
      };
    case SELECTED_PERFORMANCE_PACKAGE:
      return {
        ...state,
        hasPerformancePackage: !state.hasPerformancePackage,
        totalPrice: !state.hasPerformancePackage
          ? (state.totalPrice += 5000)
          : (state.totalPrice -= 5000),
      };
    case SELECTED_CENTER_CONSOLE_TRAYS:
      return {
        ...state,
        hasCenterConsoleTrays: !state.hasCenterConsoleTrays,
        totalPrice: !state.hasCenterConsoleTrays
          ? (state.totalPrice += 35)
          : (state.totalPrice -= 35),
      };
    case SELECTED_SUNSHADE:
      return {
        ...state,
        hasSunshade: !state.hasSunshade,
        totalPrice: !state.hasSunshade
          ? (state.totalPrice += 105)
          : (state.totalPrice -= 105),
      };
    case SELECTED_ALL_WEATHER_INTERIOR_LINERS:
      return {
        ...state,
        hasAllWeatherInteriorLiners: !state.hasAllWeatherInteriorLiners,
        totalPrice: !state.hasAllWeatherInteriorLiners
          ? (state.totalPrice += 225)
          : (state.totalPrice -= 225),
      };

    case UPDATE_DOWN_PAYMENT:
      return {
        ...state,
        downPayment: state.totalPrice * 0.1,
      };

    case UPDATE_LOAN_AMOUNT:
      return {
        ...state,
        loanAmount: state.totalPrice - state.downPayment,
      };

    case UPDATE_MONTHLY_PAYMENT:
      return {
        ...state,
        monthlyPayment:
          (state.loanAmount *
            (state.monthlyInterestRate *
              Math.pow(1 + state.interestRate / 12, state.loanTermMonths))) /
          (Math.pow(1 + state.monthlyInterestRate, state.loanTermMonths) - 1),
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: payload.time,
      };

    default:
      return state;
  }
}
