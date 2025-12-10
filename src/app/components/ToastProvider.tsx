"use client";

import { Toaster } from "sonner";
import "./toast.css";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      duration={4000}
      toastOptions={{
        className: "custom-toast",
      }}
    />
  );
}
