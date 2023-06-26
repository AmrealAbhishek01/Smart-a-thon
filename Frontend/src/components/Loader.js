import React from "react";

import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute top-[43%] left-[40%] md:left-[47%] md:top-[43%]">
      <Oval
        height={80}
        width={80}
        color="#9875FB"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
