"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";

const buttonVariant = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export default function Contact() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleClick = useCallback(() => dialogRef.current?.showModal(), []);

  return (
    <section className="CONTAINER | w-full h-full flex justify-center items-center">
      {/* Modal */}
      <dialog
        ref={dialogRef}
        id="theDialog"
        className="MODAL | p-2 w-1/2 h-1/2 rounded-lg"
      >
        {/* Modal Content Wrapper */}
        <div className="MODAL-CONTENT-WRAPPER | w-full h-full flex flex-col">
          <div className="COMPONENT-ONE | p-2 w-full h-full border">
            Output Window
          </div>
          <form>
            {/* Cancel Button */}
            <button
              className="CANCEL-BUTTON | p-2 m-1 rounded bg-red-900 text-red-500"
              value="cancel"
              formMethod="dialog"
            >
              Cancel
            </button>
            {/* Confirm Button */}
            <button
              className="CONFIRM-BUTTON | p-2 m-1 rounded bg-green-900 text-green-500"
              id="confirmBtn"
              value="default"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>

      {/* Button */}
      <motion.button
        onClick={handleClick}
        variants={buttonVariant}
        initial={false}
        whileHover="hover"
        whileTap="tap"
        className="DISPLAY-MODAL | p-2 rounded-sm bg-red-500 text-white font-black"
      >
        Click me!
      </motion.button>
    </section>
  );
}
