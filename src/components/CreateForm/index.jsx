import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CreateForm.css";

export default function CreateForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      extn: "",
      startDate: "",
      salary: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(40, "Must be 40 characters or less").required("*"),
      position: Yup.string()
        .max(40, "Must be 40 characters or less")
        .required("*"),
      office: Yup.string()
        .max(40, "Must be 20 characters or less")
        .required("*"),
      extn: Yup.string().max(4, "Must be 4 characters or less").required("*"),
      startDate: Yup.string()
        .max(40, "Must be 10 characters or less")
        .required("*"),
      salary: Yup.string()
        .max(40, "Must be 12 characters or less")
        .required("*"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <h1>Create Data</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">
            Name{" "}
            <input
              id="name"
              name="name"
              type="text"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="position">
            Position{" "}
            <input
              id="position"
              name="position"
              type="text"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.position}
            />
            {formik.touched.name && formik.errors.position ? (
              <p>{formik.errors.position}</p>
            ) : null}
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="office">
            Office{" "}
            <input
              id="office"
              name="office"
              type="text"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.office}
            />
            {formik.touched.name && formik.errors.office ? (
              <p>{formik.errors.office}</p>
            ) : null}
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="extn">
            Extn.{" "}
            <input
              id="extn"
              name="extn"
              type="text"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.extn}
            />
            {formik.touched.name && formik.errors.extn ? (
              <p>{formik.errors.extn}</p>
            ) : null}
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="startDate">
            Start Date{" "}
            <input
              id="startDate"
              name="startDate"
              type="date"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.startDate}
            />
            {formik.touched.name && formik.errors.startDate ? (
              <p>{formik.errors.startDate}</p>
            ) : null}
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="salary">
            Salary{" "}
            <input
              id="salary"
              name="salary"
              type="text"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.salary}
            />
            {formik.touched.name && formik.errors.salary ? (
              <p>{formik.errors.salary}</p>
            ) : null}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
