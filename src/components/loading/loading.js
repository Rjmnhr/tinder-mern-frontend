import { Space, Spin } from "antd";
const Loading = () => (
  <div style={{ marginTop: "100px" }}>
    <Space>
      <Spin tip="Loading"></Spin>
      <p style={{ color: "white", fontWeight: "bold" }}>
        Make sure you have a proper internet connection!
      </p>
    </Space>
  </div>
);
export default Loading;
