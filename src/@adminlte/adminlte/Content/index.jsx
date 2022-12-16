import React from "react";
function Content({ children }) {
  return (
    <>
      <div
        class="content-wrapper"
      >
        {children}
      </div>
    </>
  );
}
export default React.memo(Content);
