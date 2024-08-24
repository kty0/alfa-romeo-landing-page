function ContinueButton(props) {
  const Continue = () => {
    console.log(props.phone);

    if (props.firstName && props.lastName && props.phone && props.postCode) {
      props.setPopUp(true);
    } else {
      alert("Veuillez remplir tous les informations");
    }
  };
  return (
    <div className="grid place-items-center mt-[20px] mb-[50px]">
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
