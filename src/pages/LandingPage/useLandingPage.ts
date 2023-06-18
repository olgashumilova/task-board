import { useState } from "react";
import * as yup from "yup";
import axios from "axios";

import { useFormik } from "formik";
import { getHelpEmail } from "../../api/api";

export const useLandingPage = () => {
  const [open, setOpen] = useState(false);
  const [modalResponse, setModalResponse] = useState("");

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleOpen(values.email);
    },
  });

  const handleOpen = async (email: any) => {
    if (!(formik.touched.email && Boolean(formik.errors.email))) {
      try {
        const response = await axios.post(getHelpEmail, { email });
        if (response.data) {
          setModalResponse(response.data);
          setOpen(response.data !== "");
        }
      } catch (error) {
        setModalResponse("Something went wrong");
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
    formik.values.email = "";
  };

  return { open, modalResponse, handleClose, formik };
};
