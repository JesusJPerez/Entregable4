import React from 'react'
import "./style/UserCard.css"

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

    const handleDelete = () =>{
    deleteUserById("/users", user.id ),
    setCloseInfo(false)
    }

    const handleUpdate = () =>{
        setUpdateInfo(user)
        handleOpenForm()
    }

  return (
    <div className='user-profile'>
      <article className='user-profile__info'>
      <h2 className='user-profile__name'> {`${user.first_name} ${user.last_name} `}  </h2>
      <hr className='user-profile__divide'/>
      <ul className='user-profile__details'>
        <li className='user-profile__conte'>
          <span className='user-profile__email'> <i className='bx bxs-envelope'></i> Email: </span>
          <span className='user-profile__user_email'>{user.email}</span>
        </li>
        <li className='user-profile__conte'>
          <span className='user-profile__birthday'><i className='bx bxs-party'></i> Birthday: </span>
          <span className='user-profile__user_birthday'>{user.birthday}</span>
        </li>
      </ul>
      <hr className='user-profile__divide'/>
      <footer className='user-profile__button'>
        <button className='user-profile__button-delete' onClick={handleDelete}><i className='bx bxs-trash bx-tada' ></i></button>
        <button className='user-profile__button-update' onClick={handleUpdate}><i className='bx bxs-edit-alt bx-flashing' ></i></button>
      </footer>
    </article>
    </div>
    
  )
}

export default UserCard
