

function MyRestaurantTable({ restaurant }) {

    return (
      <div className="MyRestaurantTableDiv">
        <table>
          <thead>
            <tr>
              <th >
                Restaurant Bilgileri
              </th>
            </tr>
          </thead>
  
          <tbody>
            <tr className="TableCift">
              <th colSpan="2">
                Restaurant Adı:
              </th>
              <td>
                {restaurant.name}
              </td>
            </tr>
  
            <tr>
              <th colSpan="2">
                Restaurant şehir:
              </th>
              <td>
                {restaurant.city}
              </td>
            </tr>
  
            <tr className="TableCift">
              <th colSpan="2">
                Restaurant adress:
              </th>
              <td>
                {restaurant.address}
              </td>
            </tr>
  
            <tr>
              <th colSpan="2">
                Restaurant email:
              </th>
              <td>
                {restaurant.email}
              </td>
            </tr>
  
            <tr className="TableCift">
              <th colSpan="2">
                Restaurant açıklama:
              </th>
              <td>
                {restaurant.description}
              </td>
            </tr>
  
            <tr >
              <th colSpan="2">
                Restaurant Wifi :
              </th>
              <td>
                {restaurant.isWifi ? "Wifi var" : "Wifi yok"}
              </td>
            </tr>
  
            <tr className="TableCift">
              <th colSpan="2">
                Restaurant Tipi:
              </th>
              <td>
                {restaurant.type === 0 ? "Steak" : "Cafe"}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="MyRestaurantTableImg">
          <img src={restaurant.img} alt="RestaurantImg" />
        </div>
  
      </div>
    );
  }
  
  export default MyRestaurantTable;