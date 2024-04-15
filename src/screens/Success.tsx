import {
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Checkmark } from "react-checkmark";
import { InfinitySpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import db from "../backend/firebaseConfig";

const SuccessPage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Add loading state
  const [bookingDataParams, setBookingDataParams] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paymentStatus = searchParams.get("paymentStatus");
    const bookingData = JSON.parse(searchParams.get("bookingData") ?? "");

    if (paymentStatus === "success" && bookingData) {
      // Update database with bookingData
      console.log(bookingData);
      setBookingDataParams(bookingData);
      updateDatabase(bookingData);
    } else {
      // Handle unsuccessful payment or missing booking data
      console.log("Payment was not successful or booking data is missing");
    }
  }, [location.search]);

  const updateDatabase = async (bookingData) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        checkInDate,
        checkOutDate,
        selectedRoom,
        amount,
        productId,
      } = bookingData;

      const customerRef = doc(
        collection(db, "customers"),
        `${firstName}${lastName}`
      );
      const customerDoc = await getDoc(customerRef);
      console.log("OrderID", bookingData.productId);
      if (customerDoc.exists()) {
        // Update existing document
        await setDoc(
          customerRef,
          {
            firstName,
            lastName,
            email,
            phone: phoneNumber,
            bookStart: Timestamp.fromDate(new Date(checkInDate)),
            bookEnd: Timestamp.fromDate(new Date(checkOutDate)),
            bookedRooms: [
              ...(customerDoc.data().bookedRooms || []), // Merge existing rooms with new room
              selectedRoom,
            ],
            totalPay: amount,
            lastOrderStatus: "SUCCESS",
            paymentStart: new Date(Date.now()),
            paymentEnd: new Date(Date.now()),
            orderId: productId,
            // Add more fields as needed
          },
          { merge: true }
        );
        console.log("Customer document updated:", firstName, lastName);
      } else {
        // Create new document
        await setDoc(customerRef, {
          firstName,
          lastName,
          email,
          phone: phoneNumber,
          bookStart: Timestamp.fromDate(new Date(checkInDate)),
          bookEnd: Timestamp.fromDate(new Date(checkOutDate)),
          bookedRooms: [selectedRoom],
          totalPay: amount,
          lastOrderStatus: "SUCCESS",
          paymentStart: new Date(Date.now()),
          paymentEnd: new Date(Date.now()),
          orderId: productId,
          // Add more fields as needed
        });
        console.log("New customer document created:", firstName, lastName);
      }

      const roomDocRef = doc(db, "rooms", selectedRoom);
      const roomDoc = await getDoc(roomDocRef);

      await setDoc(
        roomDocRef,
        {
          reservedFrom: Timestamp.fromDate(new Date(checkInDate)),
          reservedTo: Timestamp.fromDate(new Date(checkOutDate)),
        },
        { merge: true }
      );

      setLoading(false);
    } catch (error) {
      console.error("Error updating database:", error);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <InfinitySpin visible={true} color="#00BFFF" height={300} width={300} />
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Checkmark size="xxLarge" />
      <br />
      <p>Thank you for your reservation {bookingDataParams?.firstName} !</p>
      <p>
        Your book on 360ViewApartments, for {bookingDataParams?.checkInDate} is
        ready!
      </p>
      <p>We are happy to serve you! </p>
    </div>
  );
};

export default SuccessPage;
