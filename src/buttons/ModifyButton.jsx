function ModifyButton(props) {
  const returnBack = () => {
    props.setPopUp(false);
  };
  return (
    <div className="grid place-items-center mt-[20px] md:mb-[50px]">
      <button
        onClick={returnBack.bind(this)}
        className="font-medium text-[#161821] text-[20px] rounded-[20px] w-[210px] h-[56px] bg-[#D9D9D9]  mx-auto"
      >
        MODIFIER
      </button>
    </div>
  );
}

export default ModifyButton;
