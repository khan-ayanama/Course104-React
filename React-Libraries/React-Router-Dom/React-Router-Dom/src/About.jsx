import { useLoaderData } from "react-router-dom";

const About = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <>
      <h1>This is About Page</h1>
    </>
  );
};

export default About;
