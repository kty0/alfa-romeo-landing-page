import FormCard2 from "./FormCard2";
import Choice from "./Choice";

function FormCard1(props) {
  console.log(props);

  if (!props.form1) {
    return (
      <div className="w-[340px] m-auto bg-forms overflow-y-scroll md:overflow-y-hidden backdrop-blur-md rounded-[10px] mt-[50px] md:w-[618px] md:h-[428px] md:ml-[65px]">
        <p className="text-white-1 text-[16px] md:text-[24px] font-semibold w-[86%] md:w-[500px] m-auto md:ml-[40px] pt-[37px]">
          Quel est le type de modèle que vous souhaitez tester ?
        </p>
        <ol className="text-white-1 text-[16px] mt-[15px ">
          <Choice
            name="COMPACT"
            setData={props.data.data.setTypeModel}
            formCheck={props.setForm1}
            date={false}
          />
          <Choice
            name="SUV"
            setData={props.data.data.setTypeModel}
            formCheck={props.setForm1}
            date={false}
          />
          <Choice
            name="ELECTIQUE & HYBRIDE"
            setData={props.data.data.setTypeModel}
            formCheck={props.setForm1}
            date={false}
          />
          <Choice
            name="SPORTIVE"
            setData={props.data.data.setTypeModel}
            formCheck={props.setForm1}
            date={false}
          />
        </ol>
      </div>
    );
  }
}

export default FormCard1;
