import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useLoginHook from "../../hooks/useLoginHook";
import { useFormik } from "formik";

const LoginPage = () => {
    const navigate = useNavigate();
    const { mutate, isLoading, error } = useLoginHook();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            mutate(values);
        },
    });

    return (
        // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-purple-200 to-pink-200 px-4">
        <div className="min-h-screen flex items-center justify-center bg-[url('https://i.pinimg.com/736x/bb/fe/36/bbfe36ac201b275daa9baf567853d7ee.jpg')] bg-cover bg-center px-4">


            <div className="bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-8 w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

                <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                    ? "border-red-500 focus:ring-red-400"
                                    : "border-gray-300 focus:ring-indigo-400"
                                }`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password
                                    ? "border-red-500 focus:ring-red-400"
                                    : "border-gray-300 focus:ring-indigo-400"
                                }`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full ${isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
                            } text-white font-medium py-2 px-4 rounded-md transition`}
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </button>

                    {/* Server error */}
                    {error && (
                        <p className="text-red-600 text-center mt-2">
                            {error.message || "Login failed. Please try again."}
                        </p>
                    )}
                </form>

                <div className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-indigo-600 hover:underline"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;




