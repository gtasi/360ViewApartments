import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import db from "../../backend/firebaseConfig";
import RoomData from "./RoomData";
import React from "react";

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

const RoomsTable = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "rooms"));
    const data: IRoom[] = [];

    querySnapshot.forEach((doc: any) => {
      data.push({
        id: doc.id,
        title: doc.name,
        price: doc.cost,
        size: doc.size,
        capacity: doc.capacity,
        bed: doc.bed,
        services: doc.services,
        image: doc.image,
        ...doc.data(),
      } as IRoom);

      setRooms(data);
    });
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="rooms-section spad">
        <div className="container">
          <div className="row">
            {rooms.map((room: IRoom, key) => {
              return (
                <RoomData
                  key={key}
                  id={room.id}
                  name={room.name}
                  cost={room.cost}
                  size={room.size}
                  capacity={room.capacity}
                  bed={room.bed}
                  services={room.services}
                  image={room.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomsTable;
