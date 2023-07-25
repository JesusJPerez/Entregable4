import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'

function App() {

  const [updateInfo, setUpdateInfo] = useState()  
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getAllUsers, createNewUser, deleteUserById, updateUserById ] = useFetch(baseUrl)

  useEffect(() =>{
    getAllUsers("/users")
  }, [])


  const handleOpenForm = () =>{
    setCloseForm(false)
  }
  

  return (
    <div className='user__open'>
      <div className='user__header'>
      <h1 className='user__name'>Users</h1>
      <button className='formuser__btn-2' onClick={handleOpenForm}>Open Form</button>
      </div>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='user__list'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
