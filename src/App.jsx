import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [typeModel, setTypeModel] = useState("");
  const [buyOrLease, setBuyOrLease] = useState("");
  const [newOrRental, setNewOrRental] = useState("");
  const [duration, setDuration] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
