import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

export const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className="flex items-center justify-between rounded-lg bg-yellow-100 p-2">
            <div className="flex gap-2">
            <HiOutlineUserCircle className="text-4xl text-orange-400"/>
            <div className="">
              <h2 className="font-bold">{contact.name}</h2>
              <p className="text-sm font-medium">{contact.email}</p>
            </div>
            </div>
            
            <div className="flex text-3xl">
              <RiEditCircleLine/>
              <IoMdTrash className="text-orange-400"/>
            </div>
          </div>
  )
};

export default ContactCard;
