"use client";
import React, {useEffect, useState} from "react";
import * as yup from "yup";
import Link from "next/link";
import Button from "../ui/button";
import {signIn, useSession} from "next-auth/react";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {Form, Formik} from "formik";
import {Input, InputPassword} from "../ui/forms";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginForm() {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  //
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (res?.ok) {
        toast.success("Login Successful");
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else if (res?.error) {
        //   throw new Error(res.error);
        throw new Error("Invalid credentials");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error: any) {
      if (error.message.startsWith("Unexpected token '<'")) {
        toast.error("Something went wrong");
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form action="" autoComplete="off">
              <div className="grid grid-cols-1 gap-6 w-full mb-8">
                {/* Email */}
                <Input
                  type="email"
                  name="email"
                  label="Username/Email"
                  placeholder="Email"
                />
                {/* Password */}
                <div className="relative">
                  <InputPassword
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-6">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="w-5 h-6 accent-primary"
                        />
                      </div>

                      <label
                        htmlFor="remember"
                        className="text-sm text-text-secondary/60"
                      >
                        Remember Password
                      </label>
                    </div>

                    <Link
                      href={"/forgot-password"}
                      className="text-sm text-primary absolute right-0 top-1"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <Button className="w-full" isLoading={isLoading} type="submit">
                Sign in
              </Button>
              <p className="text-sm text-text-primary/65 mt-4 text-center">
                <span>Don’t have an account? </span>
                {/* <span> */}
                {/* <Link href={"#"} className="text-primary cursor-not-allowed">
                    Create Account
                  </Link> */}
                <span className="text-primary cursor-not-allowed">
                  Create Account
                </span>
                {/* </span> */}
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
