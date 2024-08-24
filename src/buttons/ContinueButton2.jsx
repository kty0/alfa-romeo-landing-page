function ContinueButton2(props) {
  const sendData = () => {
    if (props.postCodeCorrect.length == 0) {
      alert("Veuillez retourner en arrière et saisir un code postal valide.");
    } else {
      props.setForm4(true);
      props.setPopUp(false);
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
