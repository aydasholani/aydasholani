import React from 'react'

export default function RemoveUser({userID}) {

  const handleRemoveUser = (userID) => {
    setUsers((state) => state.filter((user) => user._id !== userID));
  };
  return (
    <div>RemoveUser</div>
  )
}
