import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import { userData } from "./users";

export const actionCreator = async () => {
  await userData();
};

const Contacts = () => {
  //   const contacts = useLoaderData();
  //   console.log(contacts);
  return (
    <>
      <br />
      <Form method="post">
        <label htmlFor="name">Add Contact:</label>
        <input type="text" name="name" id="name" />
        <button type="submit">Submit</button>
      </Form>
      <br />
      <Link to={"1"}>ContactDetail</Link>
      <Outlet />
    </>
  );
};

export default Contacts;
