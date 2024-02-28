import axios from "axios";

export default function Login() {
  /**
   * Sign up functionality, create a new user in the database and get that id
   * @param email email of the user
   * @param password password of the user
   * @returns user id
   */
  const signUp = async (email: string, password: string) => {
    const response = await axios.post(
      "http://localhost:8080/user?email=" + email + "&password=" + password
    );
    return response.data;
  };

  /**
   * Log in functionality, get the user id from the database
   * @param email email of the user
   * @param password password of the user
   * @returns user id
   */
  const logIn = async (email: string, password: string) => {
    const response = await axios.get(
      "http://localhost:8080/user?email=" + email + "&password=" + password
    );

    return response.data;
  };

  return <></>;
}
