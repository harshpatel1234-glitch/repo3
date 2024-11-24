import React, { useState } from "react";

function Form({
  onValidate,
  onSubmit,
  onCancel,
}: {
  onValidate: (formData: Record<string, string>) => boolean;
  onSubmit: (formData: Record<string, string>) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<Record<string, string>>({
    pickupLocation: "",
    pickupDate: "",
    dropoffDate: "",
    pickupTime: "",
    dropoffTime: "",
    contactNumber: "",
  });

  const [toastMessage, setToastMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = onValidate(formData);
    if (isValid) {
      onSubmit(formData);
      localStorage.setItem("toastMessage", "Booking Successful!");
      window.location.reload();
    }
  };

  const handleCancel = () => {
    setFormData({
      pickupLocation: "",
      pickupDate: "",
      dropoffDate: "",
      pickupTime: "",
      dropoffTime: "",
      contactNumber: "",
    });
    window.location.reload();
    onCancel();
  };

  return (
    <div className="space-y-4 p-4 md:p-6 lg:p-8">
      {toastMessage && (
        <div className="toast-message">{toastMessage}</div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Pickup Location</label>
          <select
            id="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="input input-bordered w-full"
          >
            <option value="" disabled>
              Pick your location
            </option>
            <option value="location1">
              Chhatrapati Shivaji Maharaj International Airport (CSMIA)
            </option>
            <option value="location2">
              Rajkot Airport (Civil Airport)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Pickup Date</label>
          <input
            type="date"
            id="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Drop-off Date</label>
          <input
            type="date"
            id="dropoffDate"
            value={formData.dropoffDate}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Pickup Time</label>
          <input
            type="time"
            id="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Drop-off Time</label>
          <input
            type="time"
            id="dropoffTime"
            value={formData.dropoffTime}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter contact number"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          type="button"
          className="btn btn-primary w-full sm:w-auto"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary w-full sm:w-auto"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
