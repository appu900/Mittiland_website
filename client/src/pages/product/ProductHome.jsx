import React from "react";
import HomeCarausal from "../../Components/HomeCarausal";
import ProductNavbar from "../../Components/Productnavbar";
import { ModelCard } from "../../Components/Models/ModelCard";

const ProductHome = () => {
  return (
    <div className="h-auto bg-[#F3F6F8]">
      <ProductNavbar />

     

      {/* category section */}

      {/* <div className="bg-white text-3xl mb-16 py-10 text-left md:px-36 w-full h-[200px] font-semibold">
        Explore our best Unity Models
      </div> */}

    

      <div className="grid grid-cols-4 px-[130px] mt-10 gap-7">
        {[1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,].map((item) => (
          <ModelCard />
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
