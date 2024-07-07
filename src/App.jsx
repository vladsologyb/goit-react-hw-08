
import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/searchBox/SearchBox'
import ContactsList from './components/contactList/ContactList'
import Error from './components/error/Error'
import Loader from './components/loader/Loader'
import { fetchContacts } from "./redux/contactsOps"
import { selectLoading } from './redux/contactsSlice'
 import { selectError } from './redux/contactsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './App.css'

function App() {
 
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchContacts())
},[dispatch])
  
  return ( 
    <div>
  <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
            {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
  <ContactsList />
</div>
  )
  
}

export default App