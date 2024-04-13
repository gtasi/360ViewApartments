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

const RoomData = ({
  name,
  cost,
  size,
  capacity,
  bed,
  services,
  image,
}: IRoom) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="room-item"
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <img src={image} alt="" />
        <div
          className="ri-text"
          style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <h4>{name}</h4>
          <h3>
            {cost}
            <span>/Pernight</span>
          </h3>
          <table>
            <tbody>
              <tr>
                <td className="r-o">Size:</td>
                <td>{size} ㎡</td>
              </tr>
              <br />
              <tr>
                <td className="r-o">Capacity:</td>
                <td>Max person {capacity}</td>
              </tr>
              <br />
              <tr>
                <td className="r-o">Bed:</td>
                <td>{bed}</td>
              </tr>
              <br />
              <tr>
                <td className="r-o" style={{ paddingBottom: 320 }}>
                  Services:
                </td>
                <td style={{ paddingTop: "0%" }}>{services}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
