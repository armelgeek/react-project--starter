import React, { memo } from "react";
import LoadingOverlay from "react-loading-overlay";

const Overlay = memo(
  ({ isActive, text, children }) => {
    console.log("overlay rerender");
    return (
      <>
        <LoadingOverlay
          active={isActive}
          spinner
          text={text || "Chargement en cours..."}
        >
          {children}
        </LoadingOverlay>
      </>
    );
  },
  (prevProps, nextProps) => {
    return !!(
      prevProps.isActive === nextProps.isActive &&
      prevProps.text === nextProps.text &&
      prevProps.children === nextProps.children
    );
  }
);

export default Overlay;
