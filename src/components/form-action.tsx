"use client";

import { useFormStatus } from "react-dom";

export default function FormActionButtons() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button disabled className="bg-blue-600 text-white p-3 rounded-md">
          Sending
        </button>
      ) : (
        <button className="bg-gray-800 text-white p-3 rounded-md">Send</button>
      )}
    </>
  );
}
