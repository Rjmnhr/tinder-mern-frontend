import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import "./header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const showTab = (currentTab) => {
    if (currentTab === "home") {
      navigate("/");
      return;
    }

    const route = "/" + currentTab;
    navigate(route);
  };
  return (
    <>
      <div className="header-container">
        <UserOutlined
          onClick={() => showTab("register")}
          className="header-icon"
        />
        <div className="header-logo">
          <h1 onClick={() => showTab("home")}>
            Tinder.<span style={{ color: "black" }}>IN</span>
          </h1>
        </div>

        <MessageOutlined
          className="header-icon"
          onClick={() => showTab("messages")}
        />
      </div>
    </>
  );
};
