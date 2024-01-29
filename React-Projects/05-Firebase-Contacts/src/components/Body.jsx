import { IoMdContact } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Body = ({ contacts }) => {
  return (
    <div className="">
      {contacts.map((contact) => (
        <div
          className="flex bg-yellow-200 rounded-md mt-2 text-black justify-between text-xl items-center"
          key={contact.id}
        >
          <div className="">
            <IoMdContact className="text-orange-500 text-5xl" />
          </div>
          <div className="">
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
          </div>
          <div className="flex gap-1 justify-between w-max items-center">
            <FaUserEdit className="text-4xl cursor-pointer" />
            <MdDelete className="text-4xl text-violet-900 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
