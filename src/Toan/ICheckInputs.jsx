import React, { useState } from "react";

const ICheckInputs = () => {
  const [checkbox, setCheckbox] = useState({
    minimal: false,
    minimalRed: false,
    flatGreen: false,
  });
  const [radio, setRadio] = useState(null);

  const handleCheckboxChange = (key) => {
    setCheckbox((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRadioChange = (value) => {
    setRadio(value);
  };

  return (
    <div className="space-y-6">
      {/* Minimal Skin Checkbox */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <input
            type="checkbox"
            className="w-5 h-5 text-blue-500 border-gray-300 rounded-sm form-checkbox"
            checked={checkbox.minimal}
            onChange={() => handleCheckboxChange("minimal")}
          />
          <input
            type="checkbox"
            className="w-5 h-5 text-blue-500 border-gray-300 rounded-sm form-checkbox"
            checked={checkbox.minimal}
            onChange={() => handleCheckboxChange("minimal")}
          />
          <input
            type="checkbox"
            className="w-5 h-5 text-blue-500 border-gray-300 rounded-sm form-checkbox"
            checked={checkbox.minimal}
            onChange={() => handleCheckboxChange("minimal")}
          />
        </div>
        <p className="text-white">Minimal Skin Checkbox</p>
      </div>

      {/* Minimal Red Skin Checkbox */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <input
            type="checkbox"
            className="w-5 h-5 text-red-500 border-red-300 rounded-sm form-checkbox"
            checked={checkbox.minimalRed}
            onChange={() => handleCheckboxChange("minimalRed")}
          />
          <input
            type="checkbox"
            className="w-5 h-5 text-red-500 border-red-300 rounded-sm form-checkbox"
            checked={checkbox.minimalRed}
            onChange={() => handleCheckboxChange("minimalRed")}
          />
          <input
            type="checkbox"
            className="w-5 h-5 text-red-500 border-red-300 rounded-sm form-checkbox"
            checked={checkbox.minimalRed}
            onChange={() => handleCheckboxChange("minimalRed")}
          />
        </div>
        <p className="text-white">Minimal Red Skin Checkbox</p>
      </div>

      {/* Flat Green Skin Checkbox */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <input
            type="checkbox"
            className="w-5 h-5 text-green-500 border-green-300 rounded-none form-checkbox"
            checked={checkbox.flatGreen}
            onChange={() => handleCheckboxChange("flatGreen")}
          />
          <input
            type="checkbox"
            className="w-5 h-5 text-green-500 border-green-300 rounded-none form-checkbox"
            checked={checkbox.flatGreen}
            onChange={() => handleCheckboxChange("flatGreen")}
          />
          <input
            type="checkbox"
            className="w-5 h-5 text-green-500 border-green-300 rounded-none form-checkbox"
            checked={checkbox.flatGreen}
            onChange={() => handleCheckboxChange("flatGreen")}
          />
        </div>
        <p className="text-white">Flat Green Skin Checkbox</p>
      </div>

      {/* Minimal Skin Radio */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <input
            type="radio"
            name="radioGroup"
            value="minimal"
            checked={radio === "minimal"}
            onChange={() => handleRadioChange("minimal")}
            className="w-5 h-5 text-blue-500 border-gray-300 form-radio"
          />
          <input
            type="radio"
            name="radioGroup"
            value="minimal"
            checked={radio === "minimal"}
            onChange={() => handleRadioChange("minimal")}
            className="w-5 h-5 text-blue-500 border-gray-300 form-radio"
          />
          <input
            type="radio"
            name="radioGroup"
            value="minimal"
            checked={radio === "minimal"}
            onChange={() => handleRadioChange("minimal")}
            className="w-5 h-5 text-blue-500 border-gray-300 form-radio"
          />
        </div>
        <p className="text-white">Minimal Skin Radio</p>
      </div>

      {/* Minimal Red Skin Radio */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <input
            type="radio"
            name="radioGroup"
            value="minimalRed"
            checked={radio === "minimalRed"}
            onChange={() => handleRadioChange("minimalRed")}
            className="w-5 h-5 text-red-500 border-red-300 form-radio"
          />
          <input
            type="radio"
            name="radioGroup"
            value="minimalRed"
            checked={radio === "minimalRed"}
            onChange={() => handleRadioChange("minimalRed")}
            className="w-5 h-5 text-red-500 border-red-300 form-radio"
          />
          <input
            type="radio"
            name="radioGroup"
            value="minimalRed"
            checked={radio === "minimalRed"}
            onChange={() => handleRadioChange("minimalRed")}
            className="w-5 h-5 text-red-500 border-red-300 form-radio"
          />
        </div>
        <p className="text-white">Minimal Red Skin Radio</p>
      </div>

      {/* Flat Green Skin Radio */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <input
            type="radio"
            name="radioGroup"
            value="flatGreen"
            checked={radio === "flatGreen"}
            onChange={() => handleRadioChange("flatGreen")}
            className="w-5 h-5 text-green-500 border-green-300 form-radio"
          />
          <input
            type="radio"
            name="radioGroup"
            value="flatGreen"
            checked={radio === "flatGreen"}
            onChange={() => handleRadioChange("flatGreen")}
            className="w-5 h-5 text-green-500 border-green-300 form-radio"
          />
          <input
            type="radio"
            name="radioGroup"
            value="flatGreen"
            checked={radio === "flatGreen"}
            onChange={() => handleRadioChange("flatGreen")}
            className="w-5 h-5 text-green-500 border-green-300 form-radio"
          />
        </div>
        <p className="text-white">Flat Green Skin Radio</p>
      </div>
    </div>
  );
};

export default ICheckInputs;
