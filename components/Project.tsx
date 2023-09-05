import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";



function Project({ title, image, description  }: { title: string; image: string; description :string }) {
  const dispatch = useDispatch();

  const action = () => {
     
  };

  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{title}</p>
          <p className="description" style={{ fontSize: '1rem' }}>{description}</p>
        </div>

        
      </div>
    </div>
  );
}

export default Project;
