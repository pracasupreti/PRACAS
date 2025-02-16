import React, { useState } from "react";

const AIRTABLE_API =
  "https://api.airtable.com/v0/app4SfXUTLoc51qmL/Professional";
const API_KEY =
  "patIKjV5ZMM9DE7d9.1362340c27829ba8f6f4bf9556322f1b8a725bb99b9a5560b32b3de22a6c614a";

export const Join = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    profession: "",
    otherProfession: "",
    gender: "",
    city: "",
    wardNo: "",
    workingArea: "",
    referredBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitUserInfo = async (event) => {
    event.preventDefault();
    try {
      const sendData = {
        records: [
          {
            fields: {
              "First Name": formData.firstName,
              "Last Name": formData.lastName,
              "Phone Number": formData.phoneNo,
              Profession: formData.profession,
              "Other Profession": formData.otherProfession,
              Gender: formData.gender,
              City: formData.city,
              "Ward Number": formData.wardNo,
              "Working Area": formData.workingArea,
              "Referred By": formData.referredBy,
            },
          },
        ],
      };
      console.log(sendData);

      const response = await fetch(AIRTABLE_API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log(await response.json());
      alert("Form submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        phoneNo: "",
        profession: "",
        otherProfession: "",
        gender: "",
        city: "",
        wardNo: "",
        workingArea: "",
        referredBy: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Join Sriyog
        </h2>
        <form onSubmit={submitUserInfo} className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select Profession</option>
            <option value="Lift Operator">Lift Operator</option>
            <option value="Marketing">Marketing</option>
            <option value="Mason">Mason</option>
            <option value="others">Others</option>
          </select>
          {formData.profession === "others" && (
            <input
              type="text"
              name="otherProfession"
              value={formData.otherProfession}
              onChange={handleChange}
              placeholder="Specify Other Profession"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          )}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="wardNo"
            value={formData.wardNo}
            onChange={handleChange}
            placeholder="Ward No."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="workingArea"
            value={formData.workingArea}
            onChange={handleChange}
            placeholder="Working Area"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="referredBy"
            value={formData.referredBy}
            onChange={handleChange}
            placeholder="Referred By"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
