'use client'
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './contactUsFormCSS.css';

const ContactPageForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <>
      <form action="" method="" className="contactUsForm">
        <fieldset className="fieldGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" placeholder="Full Name" />

          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email" placeholder="Email Address" />

          <label>
            Phone Number:
            <PhoneInput
              country={'ae'}
              // className="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
          </label>
          {!valid && <p>Please enter a valid phone number.</p>}
        </fieldset>

        <fieldset className="fieldGroup">
          <label htmlFor="enquiry_for">Enquiry For:</label>
          <select id="enquiry_for" name="enquiry_for" className="enquiryFor">
            <optgroup label="Products">
              <option value="MPay">MPay</option>
              <option value="MTouch">MTouch</option>
              <option value="Others">Others</option>
            </optgroup>
            <optgroup label="Services">
              <option value="360">360</option>
              <option value="HUB">HUB</option>
              <option value="Others">Others</option>
            </optgroup>
          </select>
        </fieldset>

        {/* Additional fields are commented out for brevity */}

        <fieldset className="fieldGroup">
          <label htmlFor="enquiry_description">Describe your enquiry</label>
          <textarea id="enquiry_description" name="enquiry_description" placeholder="Tell us what you need."></textarea>
        </fieldset>

        <button className='w-full bg-black p-4 rounded-md text-white' type="submit">Send</button>
      </form>
    </>
  );
};

export default ContactPageForm;
