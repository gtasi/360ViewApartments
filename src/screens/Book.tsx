import { loadStripe } from "@stripe/stripe-js";
import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import db from "../backend/firebaseConfig";

interface IRoom {
  id: string;
  name: string;
  cost: number;
  size: number;
  capacity: number;
  bed: string;
  services: string;
  image: string;
}

const stripeApi = loadStripe(
  "pk_test_51Of2DiGIGymjAS46MwR1i3NWDgLiGXQm0kxdqBD5gEjQgHxCMv8DJYw2o28M1tzSdIEjf2fR7z1vj78kWHAgccPU00BBTzaj6W"
);

const Book = () => {
  const { t, i18n } = useTranslation();
  // State variables to hold form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [totalPay, setTotalPay] = useState(0);

  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [dateError, setDateError] = useState("");

  // Function to handle check-in date change
  const handleCheckInDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);

    // Validate check-in and check-out dates
    if (new Date(newCheckInDate) > new Date(checkOutDate)) {
      setDateError("Check-in date cannot be after check-out date");
    } else {
      setDateError(""); // Reset date error if valid
    }
  };

  // Function to handle check-out date change
  const handleCheckOutDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);

    // Validate check-in and check-out dates
    if (new Date(checkInDate) > new Date(newCheckOutDate)) {
      setDateError("Check-out date cannot be before check-in date");
    } else {
      setDateError(""); // Reset date error if valid
    }
  };

  const fetchData = async () => {
    // Fetch rooms from Firestore
    const querySnapshot = await getDocs(collection(db, "rooms"));
    const newData: IRoom[] = [];

    // Iterate through each room
    querySnapshot.forEach((doc: any) => {
      const room = doc.data();
      const roomId = doc.id;

      // Convert reservation dates to JavaScript Date objects
      const reservedFrom = new Date(room.reservedFrom.seconds * 1000);
      const reservedTo = new Date(room.reservedTo.seconds * 1000);

      // Convert check-in and check-out dates to JavaScript Date objects
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

      // Check for overlap
      if (
        (checkIn >= reservedFrom && checkIn <= reservedTo) ||
        (checkOut >= reservedFrom && checkOut <= reservedTo) ||
        (checkIn <= reservedFrom && checkOut >= reservedTo)
      ) {
        // Reservation overlaps with selected date range
        return;
      }

      // Room is available within the specified date range
      newData.push({
        id: roomId,
        name: room.name,
        cost: room.cost,
        size: room.size,
        capacity: room.capacity,
        bed: room.bed,
        services: room.services,
        image: room.image,
        ...room,
      });
    });

    // Set the state with the available rooms data
    setRooms(newData);
  };

  useEffect(() => {
    // Clear rooms array when date changes
    setRooms([]);
    // Fetch new data
    fetchData();
    console.log(rooms);
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    calculateTotalPay();
  }, [checkInDate, checkOutDate, selectedRoom, rooms]);

  const handleBooking = async () => {
    try {
      const response = await fetch(
        "https://us-central1-viewapartments-3b4fc.cloudfunctions.net/createStripePayment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            checkInDate,
            checkOutDate,
            selectedRoom,
            totalPay,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to initiate payment");
      }

      const data = await response.json();
      const url = data.paymentUrl;

      if (url) {
        window.location.href = url; // Redirect the user to the Stripe Checkout page
      } else {
        throw new Error("Invalid payment URL");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  // Function to calculate total pay based on the number of days
  const calculateTotalPay = () => {
    if (!checkInDate || !checkOutDate) return; // Return if either check-in or check-out date is not set

    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const numberOfDays = (endDate - startDate) / (1000 * 60 * 60 * 24); // Calculate number of days

    // Find the selected room based on the selectedRoom ID
    const selectedRoomData = rooms.find((room) => room.id === selectedRoom);
    console.log(selectedRoomData);
    if (!selectedRoomData) return; // Return if selected room data is not found

    // Calculate total pay: cost per day * number of days
    const totalPrice = selectedRoomData.cost * numberOfDays;
    setTotalPay(totalPrice);

    console.log(totalPrice);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending data to server
    // For demonstration purposes, let's just log the form data
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      checkInDate,
      checkOutDate,
      selectedRoom,
      totalPay,
    });
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center mb-4">Book Your Vacation</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">
                  {t("First Name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">
                  {t("Last Name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  {t("Your Email")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  {t("Phone Number")}
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="checkIn" className="form-label">
                  {t("Check-in Date")}
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="checkIn"
                  value={checkInDate}
                  onChange={handleCheckInDateChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="checkOut" className="form-label">
                  {t("Check-out Date")}
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="checkOut"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                  required
                />
              </div>
            </div>
            {dateError && (
              <div className="row">
                <div className="col-md-6 offset-md-3 text-danger">
                  {dateError}
                </div>
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="selectedRoom" className="form-label">
                {t("Select Room")}:
              </label>
              <select
                className="form-select"
                id="selectedRoom"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                required
              >
                <option value="">{t("Select Room")}</option>
                {/* Map over the rooms array and generate options */}
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="totalPay" className="form-label">
                {t("Total Pay")}
              </label>
              <input
                type="text"
                className="form-control"
                id="totalPay"
                value={totalPay}
                readOnly
              />
            </div>
            <button
              type="submit"
              className="btn-sm me-3"
              onClick={handleBooking}
            >
              {t("Book Now")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
