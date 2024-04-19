import React from "react";
import { useFormik} from 'formik';
import * as Yup from 'yup';

const PersonalInfoForm = ({onNext}:any) => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            dateOfBirth: ''
        },

        validationSchema : Yup.object().shape({
            fullName: Yup.string().min(2, 'Name is too short!').required('Full name required'),
            email: Yup.string().email('Invalid email format').required('Email required'),
            dateOfBirth: Yup.date().required('Date of birth required')
          }),
          onSubmit: values => {
            onNext(values);
          }
    }); 

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-white-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white-900">Personal Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="col-span-full">
            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-white-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps ('fullName')} />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.fullName}</p>
                  ) : null}
              </div>
            </div>

            <div className="col-span-full">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps ('email')} />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                  ) : null}
              </div>
            </div>

            <div className="col-span-full">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-white-900">
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  id="dateOfBirth"
                  type="date"
                  className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps ('dateOfBirth')} />
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.dateOfBirth}</p>
                  ) : null}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Next
        </button>
      </div>
    </form>
  );
}

export default PersonalInfoForm;