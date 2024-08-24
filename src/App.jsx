import { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import PopUp from "./PopUp";
import axios from "axios";

function App() {
  const em = "cathy.nguyen.75013@gmail.com";
  const url = `https://hooks.zapier.com/hooks/catch/16422019/37w62x0?em=${em}`;

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
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const sendData = async () => {
      const data = {
        data: {
          type_modele: typeModel,
          achat_ou_leasing: buyOrLease,
          vehicule_neuf_ou_location: newOrRental,
          duree_leasing: duration,
          nom: lastName,
          prenom: firstName,
          ville: city,
          telephone: phone,
        },
      };

      if (dataReady) {
        console.log("Sending data:", data);

        await axios
          .post(url, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Data sent successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error sending data:", error);
          })
          .finally(() => {
            setDataReady(false);
          });
      }
    };
    sendData();
  }, [
    dataReady,
    typeModel,
    buyOrLease,
    newOrRental,
    duration,
    lastName,
    firstName,
    city,
    phone,
    url,
  ]);

  return (
    <>
      {popUp && (
        <PopUp
          postCode={postCode}
          setCity={setCity}
          setPopUp={setPopUp}
          setForm4={setForm4}
          setDataReady={setDataReady}
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
