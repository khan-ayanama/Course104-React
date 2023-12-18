import Navbar from "./components/Navbar";
import {FiSearch} from 'react-icons/fi'
import { useEffect, useState } from "react";
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection,getDocs, onSnapshot} from 'firebase/firestore'
import {db} from './config/firebase'
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";


function App() {
  const [contacts,setContacts] = useState([])
  const {isOpen,onClose,onOpen} = useDisclouse()



  useEffect(()=>{
    const getContacts = async () => {
      try {
        const contactsRef = collection(db,'contacts')
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc)=>{
            return{
              id:doc.id,
              ...doc.data()
            }
          })
          setContacts(contactLists)
          return contactLists
        })
      } catch (error) {
        console.log(error)
      }
    }
    getContacts()
  },[])

  const filterContacts = (e) =>{
    const value = e.target.value
    const contactsRef = collection(db,'contacts')
    onSnapshot(contactsRef,(snapshot)=>{
      const contactLists = snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data()
          }
        })
      const filteredContacts = contactLists.filter((contact)=>contact.name.toLowerCase().includes(value.toLowerCase()))
          setContacts(filteredContacts)
          return filteredContacts
        })
  }

  return (
    <>
      <div className="mx-auto max-w-[370px]">
          <Navbar/>
        <div className="flex gap-2">
          <div className="flex flex-grow relative items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white"/>
            <input 
            onChange={filterContacts}
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>
          <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer"/>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact)=>(
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
      </div>
      <AddAndUpdateContact
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  )

}

export default App;
