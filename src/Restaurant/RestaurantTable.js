

function RestaurantTable({ Views }) {


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
              {Views[0].name}
            </td>
          </tr>

          <tr>
            <th colSpan="2">
              Restaurant şehir:
            </th>
            <td>
              {Views[0].city}
            </td>
          </tr>

          <tr className="TableCift">
            <th colSpan="2">
              Restaurant adress:
            </th>
            <td>
              {Views[0].address}
            </td>
          </tr>

          <tr>
            <th colSpan="2">
              Restaurant email:
            </th>
            <td>
              {Views[0].email}
            </td>
          </tr>

          <tr className="TableCift">
            <th colSpan="2">
              Restaurant açıklama:
            </th>
            <td>
              {Views[0].description}
            </td>
          </tr>

          <tr >
            <th colSpan="2">
              Restaurant Wifi :
            </th>
            <td>
              {Views[0].isWifi ? "Wifi var" : "Wifi yok"}
            </td>
          </tr>

          <tr className="TableCift">
            <th colSpan="2">
              Restaurant Tipi:
            </th>
            <td>
              {Views[0].type === 0 ? "Steak" : "Cafe"}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="MyRestaurantTableImg">
        <img src={Views[0].img} alt="RestaurantImg" />
      </div>

    </div>
  );
}

export default RestaurantTable;