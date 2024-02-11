import { Button } from "antd";
import axios from "axios";
export default function Testing() {
  return (
    <Button
      type="primary"
      onClick={() => {
        getUser(1);
      }}
    >
      Testing
    </Button>
  );
}

const url =
  "http://localhost:8080/user/transaction?id=65c93b18c4cd85192b101b41";

const getUser = async (id: number) => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};
