import { toast } from "react-toastify";

export const showNotification = (
  message,
  type,
  timeOut,
  position = "top-center"
) =>
  toast(message, {
    type,
    autoClose: timeOut,
    hideProgressBar: true,
    position,
  });

export const dismissNotification = (toastId) => toast.dismiss(toastId);
