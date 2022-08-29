import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toster = (str) =>
  toast.success(str, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
export const infoToster = (str) =>
  toast.info(str, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

export const awaitToast = (fn, str) =>
  toast.promise(fn, {
    pending: "waiting for answer",
    success: `${str} succeed`,
    error: `${str} something went wrong`,
  });
