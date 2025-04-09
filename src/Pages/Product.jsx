import React, { useState } from "react";
import data from "../data/data.json";
import PlantCard from "../Component/PlantCard";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
const Product = () => {
  const [plants, setPlants] = useState(data);
  
  return (
    <div className="w-screen h-screen overflow-x-hidden">
     <Navbar/>
      <main className="px-4">
        <div className="container mx-auto my-5">
          {["aromatic", "air purifying"].map((type) => {
            const filteredPlants = plants.filter(
              (plant) => plant.type === type
            );
            return (
              <div key={type} className="mb-8">
                <h1 className="text-2xl font-bold my-6 capitalize">
                  {type} Plants
                </h1>
                <div className="flex flex-wrap justify-center gap-10">
                  {filteredPlants.length > 0 ? (
                    filteredPlants.map((plant, idx) => (
                      <PlantCard key={idx} plant={plant} />
                    ))
                  ) : (
                    <p>No {type} plants found.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Product;
