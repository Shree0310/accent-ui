import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";

type NeumorphicButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
};

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ children, ...props }) => (
    <motion.button
    whileHover={{
      y: -4,
      boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
      scale: 1.04,
    }}
    whileTap={{
      y: 2,
      boxShadow: "2px 2px 6px #bebebe, -2px -2px 6px #ffffff",
      scale: 0.97,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="
      px-6 py-3 rounded-xl
      bg-[#e0e0e0]
      shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
      text-gray-700 font-semibold
      transition-all
      focus:outline-none
      active:shadow-[4px_4px_12px_#bebebe,-4px_-4px_12px_#ffffff]
    "
    {...props}
  >
    {children}
  </motion.button>
);