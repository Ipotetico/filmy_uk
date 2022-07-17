import React from "react";
import MiddleInfo_Frame from "./MiddleInfo_Frame/MiddleInfo_Frame";

import "./MiddleInfo.scss";

const MiddleInfo = () => {
  return (
    <div className="middleInfo__container">
      <MiddleInfo_Frame />
      <MiddleInfo_Frame />
    </div>
  );
};

export default MiddleInfo;
