import { useEffect, useState } from "react";
import ModifyButton from "./buttons/ModifyButton";
import ContinueButton2 from "./buttons/ContinueButton2";
import axios from "axios";

function PopUp(props) {
  //useffect to gather city
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(props.postCode);
  console.log(`https://geo.api.gouv.fr/communes?codePostal=${props.postCode}`);

  useEffect(() => {
    const fetchData = async () => {
      if (!props.postCode) {
        console.warn("Le code postal est vide ou non défini.");
        return;
      }
      setLoading(true);
      console.log(
        `Requête envoyée à : https://geo.api.gouv.fr/communes?codePostal=${props.postCode}`
      );

      try {
        const response = await axios.get(
          `https://geo.api.gouv.fr/communes?codePostal=${props.postCode}`
        );
        console.log("Réponse de l'API:", response.data);
        setData(response.data);
        if (response.data.length != 0) {
          props.setCity(response.data[0].nom);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!loading && (
        <div className="absolute h-[100%] z-[2] w-[100%] flex font-normal">
          <div className="bg-header z-[2] w-[350px] h-[413px] md:w-[700px] md:h-[340px] m-auto rounded-[20px]">
            <p className="text-[17px] text-white-1 mt-[50px] ml-[20px] md:ml-0 md:text-center">
              Confirmation de votre ville, pour la récupération de votre
              véhicule :
            </p>
            <div className="h-[50px] w-[250px] border-white border-2 rounded-[50px] flex items-center mt-[25px] md:mt-[50px] m-auto">
              <p className="text-white-1 text-[14px] ml-[23px]">
                {data.length != 0
                  ? data[0].nom + " " + props.postCode.slice(-2)
                  : "Not Found"}
              </p>
            </div>
            <div className="w-[100%] md:flex md:justify-evenly md:px-[40px] mt-[40px] ">
              <ModifyButton setPopUp={props.setPopUp} />
              <ContinueButton2
                postCodeCorrect={data}
                setPopUp={props.setPopUp}
                setForm4={props.setForm4}
                typeModel={props.typeModel}
                buyOrLease={props.buyOrLease}
                newOrRental={props.newOrRental}
                duration={props.duration}
                firstName={props.firstName}
                lastName={props.lastName}
                city={props.city}
                phone={props.phone}
              />
            </div>
          </div>
        </div>
      )}
      <div className="opacity-40 z-[1] bg-black fixed h-[100%] w-[100%]"></div>
    </>
  );
}

export default PopUp;
