import React from "react";
import ModelPopup from "./ModelPopup";

export const ModelCard = () => {
  const img = "https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_1280.jpg"
  return <div className="text-white  h-[260px] w-[260px] border rounded-md bg-white mr-2 cursor-pointer shadow-md">
    <div className="overflow-hidden">
        <img className="w-full overflow-hidden h-[220px] rounded-t" src="https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_1280.jpg" alt="" />
    </div>
    <div className="-z-10">
      <ModelPopup className="" model={img}/>
    </div>
  </div>;
};


// h-300 w-460