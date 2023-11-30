import React from "react";
import { FaGuitar, FaPalette, FaRegCalendarAlt, FaHeart } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { MdFastfood } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

const categories = [
  { icon: FaGuitar, description: "Musica" },
  { icon: FaPalette, description: "Arte" },
  { icon: BiSolidDrink, description: "Vida nocturna" },
  { icon: MdFastfood, description: "Gastronomia" },
  { icon: FaRegCalendarAlt, description: "Feriados" },
  { icon: FaHeart, description: "Salud" },
  { icon: IoGameController, description: "Pasatiempos" },
  { icon: IoMdBriefcase, description: "Negocios" },
];

export default function Categories() {
  return (
    <div className="h-96 bg-primary-1 flex items-center justify-start w-full overflow-scroll">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center px-7 w-full"
        >
          <div className="flex bg-white p-3 rounded-full w-[150px] h-[150px] items-center justify-center shadow-md shadow-primary-3">
            <button>
              <category.icon className="w-16 h-16 text-primary-3" />
            </button>
          </div>
          <p className="mt-2 text-primary-2">{category.description}</p>
        </div>
      ))}
    </div>
  );
}
