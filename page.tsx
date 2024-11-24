"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import CarFilterOption from "./components/Home/CarFilterOption";
import CarList from "./components/Home/CarList";
import ToastMsg from "./components/ToastMsg";
import { BookingCreated } from "@/context/BookingCreated";


export default function Home() {
  const carData = [
    { id: 1, name: "Tata Harrier", price: "45", image: "/TATA_HARRIER.jpg" },
    { id: 2, name: "Mercedes-Benz A-class", price: "75", image: "/mercedes-benz-a-class-limousine.png" },
    { id: 3, name: "KIA Carens", price: "40", image: "/KIA_CARENS.jpg" },
    { id: 4, name: "BMW X1", price: "70", image: "/BMW_X1.png" },
    { id: 5, name: "Honda Civic", price: "42", image: "/Civic.png" },
    { id: 6, name: "Toyota Fortuner", price: "45", image: "/fortuner.jpeg" },
    { id: 7, name: "Mercedes-Benz C-class", price: "80", image: "/C-class.png" },
    { id: 8, name: "BMW X3", price: "75", image: "/BMW_X3.png" },
    { id: 9, name: "Toyota Innova", price: "40", image: "/innova.png" },
  ];

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState<string | null>(null);

  const [showToastMsg,setShowToastMsg]=useState<boolean>(false);

  const handleCarSelection = (brandName: string) => {
    setSelectedBrand(brandName); // Set the selected brand based on user choice
  };

  const handlePriceOrderSelection = (order: string) => {
    setSelectedPriceOrder(order); // Set the selected price order based on user choice
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookingCreated.Provider value={{showToastMsg,setShowToastMsg}}>
      <Hero />
      <SearchInput />
      <CarFilterOption 
        carlists={carData} 
        onCarSelect={handleCarSelection} 
        onPriceOrderSelect={handlePriceOrderSelection} 
      />
      <CarList carlists={carData} selectedBrand={selectedBrand} priceOrder={selectedPriceOrder} />
      {showToastMsg?<ToastMsg msg={""}/>:null}
      </BookingCreated.Provider>
    </div>
  );
}
