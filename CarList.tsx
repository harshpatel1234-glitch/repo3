import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModel from "../CarBooking/BookingModel";

function CarList({ carlists, selectedBrand, priceOrder }: any) {
  const [selectedCar, setSelectedCar] = useState<any>(null);

  // Filter cars based on selected brand
  let filteredCars = selectedBrand
    ? carlists.filter((car: any) =>
        car.name.toLowerCase().includes(selectedBrand.toLowerCase())
      )
    : carlists;

  // Sort cars based on price order selection
  if (priceOrder === "low-to-high") {
    filteredCars = filteredCars.sort(
      (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
    );
  } else if (priceOrder === "high-to-low") {
    filteredCars = filteredCars.sort(
      (a: any, b: any) => parseFloat(b.price) - parseFloat(a.price)
    );
  }

  const handleCarClick = (car: any) => {
    setSelectedCar(car); // Set the selected car
    (window as any).my_modal_4.showModal(); // Show the modal
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCars.map((car: any) => (
        <div
          key={car.id}
          onClick={() => handleCarClick(car)} // Pass the car to the click handler
          className="cursor-pointer"
        >
          <CarCard name={car.name} price={car.price} image={car.image} />
        </div>
      ))}

      {/* Modal for Booking */}
      <dialog id="my_modal_4" className="modal">
        {selectedCar && <BookingModel car={selectedCar} />}
      </dialog>
    </div>
  );
}

export default CarList;
