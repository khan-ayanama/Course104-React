export const userData = async (userdata) => {
  const User = ["Ayan", "Naeem", "Danish", "Jameel"];
  if (userData) {
    User.push(userData);
  } else {
    User.push("new memeber");
  }
  return User;
};
