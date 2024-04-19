import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AccountInfoForm = ({formData, onPrevious}:any) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },

        validationSchema : Yup.object().shape({
            username: Yup.string().required('Username required'),
            password: Yup.string().required('Password required')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number')
          }),
          onSubmit: values => {
            alert(JSON.stringify({...formData,...values}));
          }
    }); 

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-white-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white-900">Account Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
          <div className="col-span-full">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-white-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps ('username')} />
                  {formik.touched.username && formik.errors.username ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.username}</p>
                  ) : null}
              </div>
            </div>

            <div className="col-span-full">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...formik.getFieldProps ('password')} />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                  ) : null}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onPrevious}>
          Previous
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Submit
        </button>
      </div>
    </form>
  );
}


export default AccountInfoForm;