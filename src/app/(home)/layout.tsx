"use client";
import React from "react";
const homeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Header menu</div>
      {children}
      layout
      <div> footer menu</div>
    </div>
  );
};

export default homeLayout;
