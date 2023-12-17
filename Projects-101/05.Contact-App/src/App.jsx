import Navbar from "./components/Navbar";
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection,getDocs} from 'firebase/firestore'
import {db} from './config/firebase'
import { useEffect, useState } from "react";
import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import {RiEditCircleLine} from 'react-icons/ri'
import ContactCard from "./components/ContactCard";


function App() {
  const [contacts,setContacts] = useState([])

  useEffect(()=>{
    const getContacts = async () => {
      try {
        const contactsRef = collection(db,'contacts')
        const contactSnapshot = await getDocs(contactsRef)
        const contactLists = contactSnapshot.docs.map((doc)=>{
          return {
            id:doc.id,
            ...doc.data()
          }
        })
        setContacts(contactLists)
      } catch (error) {
        
      }
    }
    getContacts()
  },[])

  return (
    <div className="mx-auto max-w-[370px]">
        <Navbar/>
      <div className="flex gap-2">
        <div className="flex flex-grow relative items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white"/>
          <input 
          type="text"
          className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>
        <AiFillPlusCircle className="text-5xl text-white cursor-pointer"/>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  )

}

export default App;
