import React from "react";
import Image from "next/image";
import {  ProdutsItemsTypes } from "@/app/types/interfaces/interfaces";
import { productTypes } from "@/app/types/interfaces/types";

const ProductCard = ({ img,title,index }:ProdutsItemsTypes) => {
  return (
   
      <div className="product_card" key={index}>
        <Image
          src={img}
          alt={title}
          width={200}
          height={200}
          className="inner-img h-[200px]"
        />
        <h5 className="text-pink uppercase">{title}</h5>
      </div>
    
  );
};

export default ProductCard;
