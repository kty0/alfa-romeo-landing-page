import Choice from "./Choice";

function FormCard2(props) {
  if (!props.form2) {
    return (
      <div className="w-[340px] m-auto bg-forms overflow-y-scroll md:overflow-hidden backdrop-blur-md rounded-[10px] mt-[50px] md:w-[618px] md:ml-[65px]">
        <p className="text-white-1 text-[16px] md:text-[24px] font-semibold w-[86%] md:w-[500px] m-auto md:ml-[40px] pt-[37px]">
          Vous êtes intéressé par ?
        </p>
        <ol className="text-white-1 text-[16px] mt-[15px]  mb-[20px]">
          <Choice
            name="UN ACHAT"
            setData={props.data.data.setBuyOrLease}
            formCheck={props.setForm2}
            date={false}
          />
          <Choice
            name="UN LEASING"
            setData={props.data.data.setBuyOrLease}
            formCheck={props.setForm2}
            date={false}
          />
        </ol>
      </div>
    );
  }
}
export default FormCard2;
