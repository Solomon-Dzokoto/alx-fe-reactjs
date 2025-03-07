import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <div className="min-h-screen grid place-content-center">
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          password: Yup.string()
            .min(8, "Your password should be more than 8")
            .required("Password is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 4000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6 w-[25rem] mx-auto h-fit my-auto">
            <div>
              <Field
                autoComplete="name"
                className="mt-1 block w-full p-4 border border-gray-200 rounded-lg focus:outline-none placeholder-gray-400"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                autoComplete="email"
                className="mt-1 block w-full p-4 border border-gray-200 rounded-lg focus:outline-none placeholder-gray-400"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                autoComplete="current-password"
                className="mt-1 block w-full p-4 border border-gray-200 rounded-lg focus:outline-none placeholder-gray-400"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className={`bg-blue-500 text-white w-full py-4 px-6 rounded-lg text-sm cursor-pointer focus:outline-none ${
                isSubmitting && "opacity-50 cursor-not-allowed"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "  Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

