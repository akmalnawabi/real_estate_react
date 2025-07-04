import React from "react";
import { housesData } from "../data";
import { useParams, Link } from "react-router-dom";
import { BiBed, BiBath, ByArea, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => house.id === parseInt(id));

  return (
    <section>
      <div className="container mx-auto m-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-xl font-semibold text-violet-600">
            ${house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="image" />
            </div>
            <div className="flex gap-x-6 text-violet-600 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1">
                <img src={house.agent.image} />
              </div>
              <div>
                <div className="font-semibold">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-3">
              <input placeholder="Name" 
               className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm" />
              <input placeholder="Email" 
               className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm" />
              <input placeholder="Phone" 
               className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm" />
              <textarea placeholder="Message"
               className="border border-gray-300 focus:border-violet-700 outline-none resize-none
              p-4 h-32 text-sm rounded w-full"></textarea>
              <div>
                <button className="bg-violet-700 text-sm text-white p-4 w-full
                rounded transition hover:bg-violet-800">Send message</button>
                <button className="border border-violet-700 text-violet-700 w-full
                hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm">Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
