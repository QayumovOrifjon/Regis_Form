import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "default",
    city: "",
    street: "",
    state: "default",
    zip: "",
    email: "",
    mobileNumber: "",
    phone: "",
    workNumber: "",
    company: "",
    courses: "default",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const [errors, setErrors] = useState({});

  const [order, setOrder] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (formData.country === "default") newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.street) newErrors.street = "Street address is required";
    if (formData.state === "default") newErrors.state = "State is required";
    if (!formData.zip) newErrors.zip = "Zip code is required";
    if (!formData.email) newErrors.email = "Email address is required";
    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.workNumber) newErrors.workNumber = "Work number is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (formData.courses === "default") newErrors.courses = "Course is required";
    if (!formData.birthMonth || !formData.birthDay || !formData.birthYear) {
      newErrors.birthDate = "Complete birth date is required";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setOrder(true);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="bg-[#367C96] p-5 px-[300px]">
      <div className="bg-[#F5FDFF] rounded-sm ">
        <form>
          <div className="px-10 py-12">
            <h1 className="text-[54px] font-bold text-[#005875]">Registration Form</h1>
            <p className="text-[24px] font-semibold text-[#005875]">Fill out the form carefully for registration</p>
          </div>
          <hr className="border-[#005875]" />
          <div className="px-10 pt-[12]">
            <p className="text-[--text]"> </p>
            <div className="">
              <div>
                <p className="text-[18px] text-[#005875] font-semibold pt-12 pb-2">Student Name</p>
                <div className="grid grid-cols-3 gap-5">
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="firstname" className="text-[14px] text-[#005875] mb-[10px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    />
                    {errors.firstname && <p className="text-red-700">{errors.firstname}</p>}
                  </div>
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="lastname" className="text-[14px] text-[#005875] mb-[10px]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    />
                    {errors.lastname && <p className="text-red-700">{errors.lastname}</p>}
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <p className="text-[18px] text-[#005875] pt-12 pb-2">Birth Date</p>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="grid grid-cols-3 gap-5">
                      <div className="flex flex-col ">
                        <label htmlFor="birthMonth" className="text-[14px] text-[#005875] mb-[10px]">
                          Month
                        </label>
                        <select
                          id="birthMonth"
                          value={formData.birthMonth}
                          onChange={handleInputChange}
                          className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                        >
                          <option value="">Select Month</option>
                          {[...Array(12)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="birthDay" className="text-[14px] text-[#005875] mb-[10px]">
                          Day
                        </label>
                        <select
                          id="birthDay"
                          value={formData.birthDay}
                          onChange={handleInputChange}
                          className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                        >
                          <option value="">Select Day</option>
                          {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="birthYear" className="text-[14px] text-[#005875] mb-[10px]">
                          Year
                        </label>
                        <select
                          id="birthYear"
                          value={formData.birthYear}
                          onChange={handleInputChange}
                          className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                        >
                          <option value="">Select Year</option>
                          {Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => (
                            <option key={i + 1900} value={i + 1900}>
                              {i + 1900}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {errors.birthDate && <p className="text-red-700">{errors.birthDate}</p>}
                  </div>

                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="gender" className="text-[14px] text-[#005875] mb-[10px]">
                      Gender
                    </label>
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-700">{errors.gender}</p>}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[18px] text-[#005875] font-semibold">Address</p>
                <div>
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="street" className="text-[14px] text-[#005875] mb-[10px]">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    />
                    {errors.street && <p className="text-red-700">{errors.street}</p>}
                  </div>

                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label className="text-[14px] text-[#005875] mb-[10px]">Country</label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    >
                      <option value="default">Select Country</option>
                      <option value="us">United States</option>
                      <option value="canada">Canada</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                    {errors.country && <p className="text-red-700">{errors.country}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col mb-[15px] md:mb-[30px]">
                      <label htmlFor="city" className="text-[14px] text-[#005875] mb-[10px]">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                      />
                      {errors.city && <p className="text-red-700">{errors.city}</p>}
                    </div>
                    <div className="flex flex-col mb-[15px] md:mb-[30px]">
                      <label htmlFor="state" className="text-[14px] text-[#005875] mb-[10px]">
                        State
                      </label>
                      <select
                        id="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                      >
                        <option value="default">Select State</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                        <option value="state3">State 3</option>
                      </select>
                      {errors.state && <p className="text-red-700">{errors.state}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="zip" className="text-[14px] text-[#005875] mb-[10px]">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    />
                    {errors.zip && <p className="text-red-700">{errors.zip}</p>}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[18px] text-[#005875] font-semibold pt-12 pb-2">Contact Information</p>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="email" className="text-[14px] text-[#005875] mb-[10px]">
                      Student E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                      placeholder="ex: myname@example.com"
                    />
                    {errors.email && <p className="text-red-700">{errors.email}</p>}
                  </div>
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="mobileNumber" className="text-[14px] text-[#005875] mb-[10px]">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                      placeholder="(000) 000-0000"
                    />
                    {errors.mobileNumber && <p className="text-red-700">{errors.mobileNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="phone" className="text-[14px] text-[#005875] mb-[10px]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    />
                    {errors.phone && <p className="text-red-700">{errors.phone}</p>}
                  </div>
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="workNumber" className="text-[14px] text-[#005875] mb-[10px]">
                      Work Number
                    </label>
                    <input
                      type="text"
                      id="workNumber"
                      value={formData.workNumber}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    />
                    {errors.workNumber && <p className="text-red-700">{errors.workNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="company" className="text-[14px] text-[#005875] mb-[10px]">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    />
                    {errors.company && <p className="text-red-700">{errors.company}</p>}
                  </div>
                  <div className="flex flex-col mb-[15px] md:mb-[30px]">
                    <label htmlFor="courses" className="text-[14px] text-[#005875] mb-[10px]">
                      Courses
                    </label>
                    <select
                      id="courses"
                      value={formData.courses}
                      onChange={handleInputChange}
                      className="border-[#005875] border rounded-sm px-2 h-10 outline-[#005875]"
                    >
                      <option value="default">Please Select</option>
                      <option value="course1">Course 1</option>
                      <option value="course2">Course 2</option>
                      <option value="course3">Course 3</option>
                    </select>
                    {errors.courses && <p className="text-red-700">{errors.courses}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
                                <label
                                    htmlFor="order-notes"
                                    className="text-[18px] mb-[15px]"
                                >
                                   Additional Comments
                                </label>
                                <textarea
                                    id="order-notes"
                                    className="resize-none max-w-[350px] w-full h-[152px] p-2 border outline-none"
                                ></textarea>
                            </div>
            <div className="pt-12 pb-5 flex justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#005875] text-white px-5 py-2 rounded-sm text-[16px] font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {order && <p className="px-10 pb-10 text-[18px] text-[#005875]">Form submitted successfully!</p>}
      </div>
    </div>
  );
};

export default App;
