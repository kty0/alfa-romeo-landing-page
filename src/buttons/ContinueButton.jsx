function ContinueButton(props) {
  const Continue = () => {
    if (props.firstName && props.lastName && props.phone && props.postCode) {
      //all valide
    } else {
      alert("Veuillez remplir tous les informations");
    }
  };
  return (
    <div className="grid place-items-center">
      <button
        onClick={Continue.bind(this)}
        className="font-medium text-white text-[20px] rounded-[20px] w-[210px] h-[56px] bg-[#E82127] mt-[20px] mb-[50px] mx-auto"
      >
        CONTINUER
      </button>
    </div>
  );
}

export default ContinueButton;
