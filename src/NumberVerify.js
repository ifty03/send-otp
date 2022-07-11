import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const NumberVerify = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <PhoneInput
        className="border w-96 h-10 px-2 rounded-md text-lg"
        placeholder="Enter phone number"
        defaultCountry="BD"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default NumberVerify;
