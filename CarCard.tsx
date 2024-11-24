// CarCard.tsx
import React from 'react';

interface CarCardProps {
  name: string;
  price: string;
  image: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 cursor-pointer">
      <img src={image} alt={name} className="w-cover md:h-40 h-30 object-cover rounded-md" />
      <h3 className="text-2xl font-bold mt-2 mb-3">{name}</h3>
      <p className="text-gray-600">Price: <span className='text-black text-2xl font-semibold'>${price}</span>/day</p>
    </div>
  );
};

export default CarCard;
