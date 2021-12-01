import cn from "classnames";
import React from "react";
import styles from "./alert.module.css";
export default ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
};
