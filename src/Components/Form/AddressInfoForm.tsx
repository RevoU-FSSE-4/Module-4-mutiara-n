import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressInfoForm = ({ onNext, onPrevious}: any) => {
    const formik = useFormik({
        initialValues: {
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ''
        },

        validationSchema : Yup.object().shape({
            streetAddress: Yup.string().required('Street address required'),
            city: Yup.string().required('City required'),
            state: Yup.string().required('State required'),
            zipCode: Yup.string().
            matches(/^\d{5}$/, 'Invalid Zip Code').
            required('Zip code required'),
          }),
          onSubmit: values => {
            onNext(values);
          }
    }); 

    return (
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-white-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-white-900">Address Information</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="col-span-full">
                  <label htmlFor="streetAddress" className="block text-sm font-medium leading-6 text-white-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="streetAddress"
                      placeholder="Enter your home address"
                      className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...formik.getFieldProps ('streetAddress')} />
                      {formik.touched.streetAddress && formik.errors.streetAddress ? (
                        <p className="text-red-500 text-xs italic">{formik.errors.streetAddress}</p>
                      ) : null} 
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-white-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter your homecity"
                      className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...formik.getFieldProps ('city')} />
                      {formik.touched.city && formik.errors.city ? (
                        <p className="text-red-500 text-xs italic">{formik.errors.city}</p>
                      ) : null} 
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium leading-6 text-white-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="state"
                      placeholder="Enter your home state"
                      autoComplete="address-level1"
                      className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...formik.getFieldProps ('state')} />
                      {formik.touched.state && formik.errors.state ? (
                        <p className="text-red-500 text-xs italic">{formik.errors.state}</p>
                      ) : null} 
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="zipCode" className="block text-sm font-medium leading-6 text-white-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="zipCode"
                      placeholder="Enter your zip code"
                      className="p-3 block w-full rounded-md border-0 bg-transparent py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...formik.getFieldProps ('zipCode')} />
                      {formik.touched.zipCode && formik.errors.zipCode ? (
                        <p className="text-red-500 text-xs italic">{formik.errors.zipCode}</p>
                      ) : null} 
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={onPrevious}
            >Previous</button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onNext}
            >Next</button>
          </div>
        </form>
      );
}




export default AddressInfoForm;