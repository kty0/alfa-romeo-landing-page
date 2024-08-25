function ContinueButton(props) {
  const Continue = () => {
    let alertMessage = "Veuillez verifier les informations suivants :";

    if (!props.firstName) {
      alertMessage = alertMessage + " Prénom";
    }
    if (!props.lastName) {
      alertMessage = alertMessage + " Nom";
    }
    if (!props.postCode) {
      alertMessage = alertMessage + " Code postal";
    }
    if (!props.phone) {
      alertMessage = alertMessage + " Téléphone";
    }
    if (props.firstName && props.lastName && props.phone && props.postCode) {
      props.setPopUp(true);
    } else {
      alert(alertMessage);
    }
  };
  return (
    <div className="grid place-items-center mt-[50px] mb-[50px]">
      <button
        onClick={Continue.bind(this)}
        className="font-medium text-white text-[20px] rounded-[20px] w-[210px] h-[56px] bg-[#E82127] mx-auto"
      >
        CONTINUER
      </button>
    </div>
  );
}

export default ContinueButton;
