import React from "react";

const functionalWrapper = (WrappingElement, elementClassName) => {
  return props => (
    <div className={elementClassName}>
      <WrappingElement {...props} />
    </div>
  );
};

export default functionalWrapper;
