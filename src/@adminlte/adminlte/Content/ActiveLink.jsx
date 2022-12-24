import React from "react";

function ActiveLink({ title }) {
  return (
    <>
      <li className="breadcrumb-item active">{title}</li>
    </>
  );
}

export default React.memo(ActiveLink);
