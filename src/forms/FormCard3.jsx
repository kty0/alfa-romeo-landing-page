import Choice from "./Choice";

function FormCard3(props) {
  if (!props.form3) {
    if (props.data.data.buyOrLease === "UN ACHAT") {
      return (
        <div className="w-[340px] m-auto bg-forms overflow-y-scroll md:overflow-hidden backdrop-blur-md rounded-[10px] mt-[50px] md:w-[618px] md:ml-[65px]">
          <p className="text-white-1 text-[16px] md:text-[24px] font-semibold w-[86%] md:w-[500px] m-auto md:ml-[40px] pt-[37px]">
            Pour quel type de véhicule ?
          </p>
          <ol className="text-white-1 text-[16px] mt-[15px] mb-[40px]">
            <Choice
              name="NEUF"
              setData={props.data.data.setNewOrRental}
              formCheck={props.setForm3}
              date={false}
            />
            <Choice
              name="OCCASION"
              setData={props.data.data.setNewOrRental}
              formCheck={props.setForm3}
              date={false}
            />
          </ol>
        </div>
      );
    } else {
      return (
        <div className="w-[340px] m-auto bg-forms overflow-y-scroll md:overflow-hidden backdrop-blur-md rounded-[10px] mt-[50px] md:w-[618px] md:ml-[65px]">
          <p className="text-white-1 text-[16px] md:text-[24px] font-semibold w-[86%] md:w-[500px] m-auto md:ml-[40px] pt-[37px]">
            Pour quelle durée ?
          </p>
          <ol className="text-white-1 text-[16px] mt-[15px] mb-[40px]">
            <Choice
              name="6 MOIS"
              setData={props.data.data.setDuration}
              formCheck={props.setForm3}
              date={true}
            />
            <Choice
              name="12 MOIS"
              setData={props.data.data.setDuration}
              formCheck={props.setForm3}
              date={true}
            />
            <Choice
              name="18 MOIS"
              setData={props.data.data.setNewOrRental}
              formCheck={props.setForm3}
              date={true}
            />
            <Choice
              name="24 MOIS"
              setData={props.data.data.setNewOrRental}
              formCheck={props.setForm3}
              date={true}
            />
          </ol>
        </div>
      );
    }
  }
}

export default FormCard3;
