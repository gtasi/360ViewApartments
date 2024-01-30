import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";
import roomb3 from "../../assets/img/room/room-b3.jpg";
import roomb4 from "../../assets/img/room/room-b4.jpg";
import "../../App.css";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../backend/firebaseConfig";
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

const RoomItem = ({
  name,
  cost,
  size,
  capacity,
  bed,
  services,
  image,
}: IRoom) => (
  <Col lg={3} md={6}>
    <Card className="hp-room-item" style={{ height: "100%", maxWidth: "none" }}>
      <Card.Img variant="top" src={image} style={{ objectFit: "fill" }} />
      <Card.Body>
        <div
          className="hr-text"
          style={{ position: "absolute", left: 45, right: 25, bottom: 40 }}
        >
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2">
            {cost}
            <span>/Per night</span>
          </Card.Subtitle>
          <table>
            <tbody>
              <tr>
                <td className="r-o" style={{ color: "black" }}>
                  Size:
                </td>
                <td style={{ color: "black" }}>{size} ㎡</td>
              </tr>
              <tr>
                <td className="r-o" style={{ color: "black" }}>
                  Capacity:
                </td>
                <td style={{ color: "black" }}>Max person {capacity}</td>
              </tr>
              <tr>
                <td className="r-o" style={{ color: "black" }}>
                  Bed:
                </td>
                <td style={{ color: "black" }}>{bed}</td>
              </tr>
              <tr>
                <td className="r-o" style={{ color: "black" }}>
                  Services:
                </td>
                <td style={{ color: "black" }}>{services}</td>
              </tr>
            </tbody>
          </table>
          <Button variant="outline-warning" style={{}}>
            More Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

const RoomSection = () => {
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
    <section className="hp-room-section">
      <Container fluid>
        <Row className="hp-room-items">
          {/* <RoomItem
            title="Double Room"
            price="50€"
            size="30"
            capacity="5"
            bed="King Beds"
            services="Wifi, Television, Bathroom,..."
            image={roomb1}
          />
          <RoomItem
            title="Premium King Room"
            price="50€"
            size="30"
            capacity="5"
            bed="King Beds"
            services="Wifi, Television, Bathroom,..."
            image={roomb2}
          /> */}
          {rooms.map((room: IRoom, key) => {
            return (
              <RoomItem
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
        </Row>
      </Container>
    </section>
  );
};

export default RoomSection;
