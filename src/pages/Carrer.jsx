import React ,{useState} from 'react';
import { IoReload } from "react-icons/io5";

export function Carrer () {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);


    const initialState = {
      firstName: '',
      lastName: '',
      maritalStatus: 'Married',
      city: 'Kathmandu',
      phone: '',
      phoneNum : '',
      email: '',
      gender: 'Male',
      school: 'Tribhuvan University',
      highestEducation: 'Bachelor',
      passedYear: '2006',
      skills: [],
      currentEmploymentStatus: 'Unemployed',
      employmentType :'Contract',
      expectedMonthlySalary: '',
      dutyHours: '',
      fathersName: 'Badri Prasad Upreti',
      phoneNumber: '',
      cvResume: null,
      cover:null,
      headshot: null,
      fatherName: 'Hari Lal Khadka',
    };
  
    const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your Form is Submitted")
    setFormData(initialState);
    // Handle form submission
    console.log(formData);
  };

  const handleClearForm = () => {
 
    setFormData(initialState);

 
  };



  return (
   <>
   <div className='p-[95px] lg:ml-[250px]  md:ml-[195px] sm:ml-[100px] ml-[3px] '>
    <h1 className='font-bold sm:text-4xl text-2xl'>SRIYOG | Career</h1>
    <p className='sm:text-sm text-[12px]'>Shaping robots</p>
   </div>
   <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-2 bg-white  mb-[200px]">
  <div className="grid grid-cols-2 gap-2">
  
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">First Name *</label>
      <input
        type="text"
        name="firstName"
        placeholder='Enter your First Name'
        value={formData.firstName}
        onChange={handleChange}
        className="mt-1 block w-[300px] px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600  focus:border-blue-800"
        required
      />
    </div>


    <div className="mb-4 ">
      <label className="block text-gray-700 text-sm font-bold">Last Name *</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
              placeholder='Enter your Last Name'
        onChange={handleChange}
        className="mt-1 block w-[300px] px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold ">Marital Status *</label>
      <select
        name="maritalStatus"
        value={formData.maritalStatus}
        onChange={handleChange}
        className="mt-1 block w-[300px]  px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="Married">Married</option>
        <option value="Single">Single</option>
        <option value="Complicated">Complicated</option>
      </select>
    </div>


    <div className="mb-4 text-sm font-semibold">
      <label className="block text-gray-700 text-sm font-bold">City *</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="mt-1 block w-[300px]  px-3 py-[5px] border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">Phone *</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="mt-1 block w-[300px] px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 block w-[300px]  px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">Gender *</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="mt-1 block w-[300px]  px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">Name of School/University *</label>
      <input
        type="text"
        name="school"
        value={formData.school}
        onChange={handleChange}
        className="mt-1 block w-[300px]  px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">Highest Education *</label>
      <select
        name="highestEducation"
        value={formData.highestEducation}
        onChange={handleChange}
        className="mt-1 block w-[300px]  px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option  value="SEE">SEE</option>
        <option value="Diploma">Diploma</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Masters">Masters</option>
        <option value="M.Phil">M.Phil</option>
        <option value="Phd">Phd</option>
        <option value="Other">Other</option>
      </select>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">Passed Year *</label>
      <input
        type="date"
        name="passedYear"
        value={formData.passedYear}
        onChange={handleChange}
        className="mt-1 block w-[300px]  px-3 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>


    <div className="mb-4 col-span-2 ">
      <label className="block text-gray-700 text-sm font-bold">Top 5 Skills</label>
      <input
        type="text"
        name="skills"
        value={formData.skills.join(', ')}
        onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(', ') })}
        className="mt-1 block w-[640px]  px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div className="space-y-6"> 

  <div className="flex gap-4">
    <div>
      <label className="block text-gray-700 text-sm font-bold">Upload CV/Resume *</label>
      <input
        type="file"
        name="cvResume"
        onChange={handleFileChange}
        className="mt-1 block w-[300px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold">Upload Cover Letter *</label>
      <input
        type="file"
        name="cover"
        onChange={handleFileChange}
        className="mt-1 block w-[300px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>
  </div>


  <div className="flex gap-4">
    <div>
      <label className="block text-gray-700 text-sm font-bold">Headshot *</label>
      <input
        type="file"
        name="headshot"
        onChange={handleFileChange}
        className="mt-1 block w-[300px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold">Citizenship *</label>
      <input
        type="file"
        name="citizenship"
        onChange={handleFileChange}
        className="mt-1 block w-[300px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold">Current Employment Status *</label>
    <select
      name="currentEmploymentStatus"
      value={formData.currentEmploymentStatus}
      onChange={handleChange}
      className="mt-1 block w-full max-w-[700px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="Unemployed">Unemployed</option>
      <option value="Fresher">Fresher</option>
      <option value="Trained/Skilled">Trained/Skilled</option>
      <option value="Foreign Returnee">Foreign Returnee</option>
      <option value="Looking for Better Opportunities">Looking for Better Opportunities</option>
      <option value="Others">Others</option>
    </select>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold">Employment Type *</label>
    <select
      name="employmentType"
      value={formData.employmentType}
      onChange={handleChange}
      className="mt-1 block w-full max-w-[700px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="Contract">Contract</option>
      <option value="Agent">Agent</option>
      <option value="Fulltime">Fulltime</option>
      <option value="Parttime">Parttime</option>
      <option value="Internship">Internship</option>
      <option value="Volunteer">Volunteer</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold">Expected Monthly Salary *</label>
    <select
      name="expectedMonthlySalary"
      value={formData.expectedMonthlySalary}
      onChange={handleChange}
      className="mt-1 block w-full max-w-[400px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="Others">Others</option>
      <option value="Applying as an Agent">Applying as An Agent</option>
      <option value="below_nineteen">Below NRP 19,000/-Monthly</option>
      <option value="below_twennie">Below NRP 29,000/-Monthly</option>
      <option value="below_fourNine">Below NRP 49,000/-Monthly</option>
      <option value="below_ninenine">Below NRP 99,000/-Monthly</option>
    </select>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold">Day Hours *</label>
    <select
      name="dutyHours"
      value={formData.dutyHours}
      onChange={handleChange}
      className="mt-1 block w-full max-w-[400px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="Hybrid">Hybrid</option>
      <option value="Remote">Remote</option>
      <option value="Contract">Contract</option>
      <option value="fullday">Full Day 10 AM to 5 PM</option>
      <option value="morning">Morning 6 AM to 9 AM</option>
      <option value="day">Day 11 AM to 3 PM</option>
      <option value="evening">Evening 6 PM to 9 PM</option>
      <option value="satur">Saturday 11 AM to 7 PM</option>
      <option value="others">Others</option>
    </select>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold">Father's Name *</label>
    <input
      type="text"
      name="fatherName"
      value={formData.fatherName}
      onChange={handleChange}
      className="mt-1 block w-full max-w-[400px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      required
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold">Phone Number *</label>
    <input
      type="text"
      name="phoneNum"
      value={formData.phoneNum}
      onChange={handleChange}
      className="mt-1 block w-full max-w-[400px] px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      required
    />
  </div>
</div>



    <div className="mb-4 flex justify-end">
      <div className="flex items-center gap-2">
        <IoReload className="text-blue-600 cursor-pointer" onClick={handleClearForm} />
        <h1 onClick={handleClearForm} className="text-blue-600 text-sm sm:text-lg cursor-pointer">
          Clear form
        </h1>
      </div>

      <button
        type="submit"
        className="ml-4 bg-gray-500 text-white px-3 py-2 rounded-md shadow-md hover:bg-indigo-700"
      >
        Submit
      </button>
    </div>
  </div>
</div>

</form>


    </>
  )
}