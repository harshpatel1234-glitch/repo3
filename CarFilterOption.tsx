import React, { useState } from "react";

interface Car {
  name: string; // Ensure the 'name' field exists and is a string
}

interface CarFilterOptionProps {
  carlists: Car[];
  onCarSelect: (brand: string) => void;
  onPriceOrderSelect: (order: string) => void;
}

function CarFilterOption({
  carlists,
  onCarSelect,
  onPriceOrderSelect,
}: CarFilterOptionProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedPriceOrder, setSelectedPriceOrder] = useState<string>("");

  const handleCarSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const brandName = event.target.value;
    setSelectedBrand(brandName);
    onCarSelect(brandName); // Trigger the function passed from Home to update the selected brand
  };

  const handlePriceOrderSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const order = event.target.value;
    setSelectedPriceOrder(order);
    onPriceOrderSelect(order); // Trigger the function passed from Home to update the price order
  };

  // Extract unique brands from car list data
  const brandOptions = Array.from(
    new Set(carlists.map((car) => car.name.split(" ")[0]))
  );

  return (
    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="mb-4 md:mb-0">
        <h2 className="text-2xl md:text-[30px] font-bold">Cars Catalog</h2>
        <h2 className="text-sm md:text-base">Explore our cars you might like</h2>
      </div>

      <div className="flex flex-col md:flex-row md:gap-5 gap-3 w-full md:w-auto">
        {/* Dropdown to Select Car Brand */}
        <select
          value={selectedBrand}
          onChange={handleCarSelection}
          className="select select-bordered w-full md:max-w-xs"
        >
          <option value="">All Brand</option>
          {brandOptions.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Dropdown to Select Price Order */}
        <select
          value={selectedPriceOrder}
          onChange={handlePriceOrderSelection}
          className="select select-bordered w-full md:max-w-xs"
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default CarFilterOption;
