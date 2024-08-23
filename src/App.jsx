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
  const [dataCollected, setDataCollected] = useState(false);

  if (dataCollected) {
    console.log("data Collected!");
  } else {
    console.log("data not collected yet");
    console.log("typeMode : " + typeModel);
    console.log("buyOrLease : " + buyOrLease);
    console.log("newOrRental : " + newOrRental);
    console.log("duration : " + duration);
    console.log("lastName : " + lastName);
    console.log("firstName : " + firstName);
    console.log("city : " + city);
    console.log("phone : " + phone);
  }

  return (
    <>
      <Header />
      <Content
        setTypeModel={setTypeModel}
        setBuyOrLease={setBuyOrLease}
        setNewOrRental={setNewOrRental}
        setDuration={setDuration}
        setLastName={setLastName}
        setFirstName={setFirstName}
        setCity={setCity}
        setPhone={setPhone}
        setDataCollected={setDataCollected}
        buyOrLease={buyOrLease}
      />
      <Footer />
    </>
  );
}

export default App;
