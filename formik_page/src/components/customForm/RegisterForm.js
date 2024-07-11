import React from 'react'
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { CustomCheckBox } from './CustomCheckBox';
import './RegisterForm.css';

const validationSchema= yup.object({
  username: yup
            .string()
            .required("Username is required"),
  firstName: yup.string()
            .min(3,"Firtname must be of min of 3 characters")
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
  lastName: yup.string()
            .max(20, 'Must be 20 characters or less')
           .required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  jobType: yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
  acceptedtos :yup
          .boolean()
          .oneOf([true], "You must accept the terms and conditions")

})

const RegisterForm = () => {
  return (
    <Formik

    initialValues={{
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      jobType: '',
      acceptedtos: false
    }}
    validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='form-container'>
          <h1>RegisterForm Using Formik and Yup</h1>
          <CustomInput label= "Username" name="username" type = "text" placeholder = "Joe">

          </CustomInput>
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <CustomInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <CustomSelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Development</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckBox name="acceptedTerms">
            I accept the terms and conditions
          </CustomCheckBox>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm