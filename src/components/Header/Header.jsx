import React, { useState } from "react";
import FormUser from "../FormUser/FormUser";

export default function Header() {
  return (
    <div className="container header">
      <div className="header__top">
        <h1>Demo</h1>
      </div>
      <FormUser />
    </div>
  );
}
