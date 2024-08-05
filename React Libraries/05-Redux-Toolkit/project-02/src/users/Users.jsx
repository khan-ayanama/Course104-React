import { useSelector } from "react-redux";
import { selectAllUsers } from "./userSlice";
import { selectAllPosts } from "../products/posts";

export default function Users() {
  const users = useSelector(selectAllUsers);
  const posts = useSelector(selectAllPosts);
  console.log(posts);
  return (
    <>
      <h2>Users Detail</h2>
      {users?.map((user) => (
        <span key={user.id}>{user.id}</span>
      ))}
    </>
  );
}
