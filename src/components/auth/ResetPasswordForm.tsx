"use client";
import React, {useEffect, useState} from "react";
import * as yup from "yup";
import Link from "next/link";
import Button from "../ui/button";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {Form, Formik} from "formik";
import {Input, InputPassword} from "../ui/forms";
import {Dialog, DialogBody, DialogHeader} from "@material-tailwind/react";
import {CloseIcon, SuccessIcon} from "icons/forms";

const initialValues = {
  password: "",
};
const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

export default function ResetPasswordForm() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(!open);
  const [isLoading, setIsLoading] = useState(false);

  const closeModalAndRedirect = () => {
    handleOpen();
    router.push("/login");
  };
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        handleOpen();
      }, 2000);

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
                {/* Password */}
                <InputPassword
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                {/* Password */}
                <InputPassword
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm password"
                />
              </div>

              <Button className="w-full" isLoading={isLoading} type="submit">
                Reset password
              </Button>
            </Form>
          );
        }}
      </Formik>
      <Dialog
        open={open}
        handler={closeModalAndRedirect}
        className="focus:outline-none flex items-center justify-center rounded-none bg-transparent shadow-none"
      >
        <DialogBody className="w-[500px] max-h-[90vh] p-0 bg-white rounded-10 overflow-hidden">
          <div className="flex justify-end p-3">
            <button onClick={closeModalAndRedirect}>
              <CloseIcon />
            </button>
          </div>

          <div className="flex flex-col items-center text-text-secondary p-8 pt-4">
            <p className="text-28 mb-6 font-medium">Success</p>
            <SuccessIcon />
            <p className="text-center mt-6 mb-2 text-2xl font-medium">
              Your password has been reset successfully.
            </p>
            <p className="text-center text-text-secondary/70 mb-6 font-medium text-sm">
              Login with your new password to continue into your account
            </p>
            <Button className="w-full" onClick={closeModalAndRedirect}>
              Continue
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
}
