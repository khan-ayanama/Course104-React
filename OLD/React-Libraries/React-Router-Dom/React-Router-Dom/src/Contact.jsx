import { useLoaderData, useParams } from "react-router-dom";

const Contact = () => {
  const param = useParams();
  const contacts = useLoaderData();
  console.log("contact", contacts);
  return (
    <>
      <h3>List of Contacts:</h3>
      <div className="users">
        {contacts.map((user) => (
          <div key={user}>{user}</div>
        ))}
      </div>
    </>
  );
};

export default Contact;
