import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import PopUp from "./PopUp";

function App() {
  const [typeModel, setTypeModel] = useState("");
  const [buyOrLease, setBuyOrLease] = useState("");
  const [newOrRental, setNewOrRental] = useState("");
  const [duration, setDuration] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [form4, setForm4] = useState(false);
  const [popUp, setPopUp] = useState(false);

  console.log("data not collected yet");
  console.log("typeMode : " + typeModel);
  console.log("buyOrLease : " + buyOrLease);
  console.log("newOrRental : " + newOrRental);
  console.log("duration : " + duration);
  console.log("lastName : " + lastName);
  console.log("firstName : " + firstName);
  console.log("city : " + city);
  console.log("postCode : " + postCode);
  console.log("phone : " + phone);
  console.log("popup ? : " + popUp);

  return (
    <>
      {popUp && (
        <PopUp
          postCode={postCode}
          setCity={setCity}
          setPopUp={setPopUp}
          setForm4={setForm4}
        />
      )}
      <Header />
      <Content
        setTypeModel={setTypeModel}
        setBuyOrLease={setBuyOrLease}
        setNewOrRental={setNewOrRental}
        setDuration={setDuration}
        setLastName={setLastName}
        setFirstName={setFirstName}
        setPostCode={setPostCode}
        setPhone={setPhone}
        setPopUp={setPopUp}
        setCity={setCity}
        buyOrLease={buyOrLease}
        form4={form4}
        setForm4={setForm4}
      />
      <Footer />
    </>
  );
}

export default App;
