import { useState } from "react";
import "./register-form.css";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [img_URL, setImg_URL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://tindermernbackend-renjithcmrenju.b4a.run/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age, img_URL }),
    })
      .then((response) => {
        const data = response.json();
        console.log(data);
        alert("Signed up successfully!");
        setName("");
        setEmail("");
        setAge("");
        setImg_URL("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="form-container"></div>
      <form onSubmit={handleSubmit}>
        <div className="detail-input">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="detail-input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="detail-input">
          <label>Age</label>
          <input
            type="Number"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="detail-input">
          <labe>Image URL</labe>
          <input
            type="text"
            value={img_URL}
            placeholder="Enter your image URL"
            onChange={(e) => setImg_URL(e.target.value)}
            required
          />
        </div>
        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};
