import React from 'react'

const MyCart = (props) => {
  return (
    <div>
      <p><strong>C-ID</strong>{props.testHotel.cid}</p>
      <p><strong>Name</strong>{props.testHotel.name}</p>
      <p><strong>Age</strong>{props.testHotel.age}</p>
      <p><strong>Address</strong>{props.testHotel.address}</p>
      <p><strong>Email</strong>{props.testHotel.email}</p>
    </div>
  )
}

export default MyCart
