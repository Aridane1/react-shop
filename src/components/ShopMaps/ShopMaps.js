import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './shop-map.css'

function ShopMaps(props) {
  const shops = props.shops;
  return (
    <>
      <MapContainer
        center={[28.0575662, -15.6087038]}
        zoom={1}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map((s) => {
          return (
            <Marker position={[s.latitude, s.longitud]}>
              <Popup>
                {s.title} <br /> {s.descripcion}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
export default ShopMaps;
