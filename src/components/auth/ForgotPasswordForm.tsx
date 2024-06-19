"use client";
import React, {useEffect, useState} from "react";
import * as yup from "yup";
import Link from "next/link";
import Button from "../ui/button";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {Form, Formik} from "formik";
import {Input, InputPassword} from "../ui/forms";

const initialValues = {
  email: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
});

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  //
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        router.push("/reset-password");
      }, 3000);
      //   const res = await signIn("credentials", {
      //     ...values,
      //     redirect: false,
      //   });
      //   if (res?.ok) {
      //     toast.success("Login Successful");
      //     setTimeout(() => {
      //       router.push("/dashboard");
      //     }, 2000);
      //   } else if (res?.error) {
      //     throw new Error(res.error);
      //   } else {
      //     throw new Error("Something went wrong");
      //   }
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
              </div>

              <div className="flex gap-4">
                <Link href={"/login"}>
                  <Button variant={"light"} className="" type="button">
                    Back to sign in
                  </Button>
                </Link>
                <Button className="" isLoading={isLoading} type="submit">
                  Send instructions
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
