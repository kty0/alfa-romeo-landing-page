import axios from "axios";

const url = "https://hooks.zapier.com/hooks/catch/16422019/37w62x0";
const em = "cathy.nguyen.75013@gmail.com";

function ContinueButton2(props) {
  const data = {
    em: em,
    data: {
      type_modele: props.typeModel,
      achat_ou_leasing: props.buyOrLease,
      vehicule_neuf_ou_location: props.newOrRental,
      duree_leasing: props.duration,
      nom: props.lastName,
      prenom: props.firstName,
      ville: props.city,
      telephone: props.phone,
    },
  };

  const sendData = () => {
    if (props.postCodeCorrect.length == 0) {
      alert("Veuillez retourner en arrière et saisir un code postal valide.");
    } else {
      props.setForm4(true);
      props.setPopUp(false);
      axios
        .post(url, data)
        .then((response) => {
          console.log("Data sent successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    }
  };

  return (
    <div className="grid place-items-center mt-[20px] md:mb-[50px]">
      <button
        onClick={sendData.bind(this)}
        className="font-medium text-white text-[20px] rounded-[20px] w-[210px] h-[56px] bg-[#E82127] mx-auto"
      >
        CONTINUER
      </button>
    </div>
  );
}

export default ContinueButton2;
