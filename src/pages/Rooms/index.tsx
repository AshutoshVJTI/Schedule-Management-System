import React from 'react'
import CreateRoom from '../../components/Rooms/CreateRoom'
import DeleteRoom from '../../components/Rooms/DeleteRoom'
import UpdateRoom from '../../components/Rooms/UpdateRoom'
import ViewRooms from '../../components/Rooms/ViewRooms'

const RoomsPage = () => {
  return (
    <div>
      <CreateRoom />
      <ViewRooms />
      <UpdateRoom />
      <DeleteRoom />
    </div>
  )
}

export default RoomsPage