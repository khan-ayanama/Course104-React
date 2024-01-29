import Navigation from "./components/Navigation";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./config/firebase";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const getContacts = async () => {
    try {
      const contactsRef = collection(database, "contacts");
      const contactSnapshot = await getDocs(contactsRef);
      const contactLists = contactSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setContacts(contactLists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="w-1/3 bg-gray-700 text-white min-h-screen">
      <div className="w-10/12 m-auto">
        <Navigation openModal={openModal} />
        <Body contacts={contacts} />
        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default App;
