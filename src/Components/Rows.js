import React from "react";

function Rows(props) {
  return props.employess.map((item, index) => {
    return (
      <tr key={index}>
        <th scope="row">{item.id.value}</th>
        <td>
          <img src={item.picture.thumbnail} />
        </td>
        <td>
          {item.name.first} {item.name.last}
        </td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.location.city}</td>
      </tr>
    );
  });
}

export default Rows;
