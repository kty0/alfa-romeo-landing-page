import ContinueButton from "../buttons/ContinueButton";
import Choice from "./Choice";
import ContactInput from "./ContactInput";

function FormCard4(props) {
  if (!props.form4) {
    return (
      <div className="w-[340px] m-auto bg-forms overflow-y-scroll backdrop-blur-md rounded-[10px] mt-[50px] md:w-[618px] md:ml-[65px]">
        <p className="text-white-1 text-[16px] md:text-[24px] font-semibold w-[86%] md:w-[500px] m-auto md:ml-[40px] pt-[37px] mb-[20px]">
          Vos coordonnées :
        </p>
        <div className="md:flex md:gap-11 md:mb-[40px] md:ml-[40px]">
          <ContactInput label="PRÉNOM" input="Écrire" postCode={false} />
          <ContactInput label="NOM" input="Écrire" postCode={false} />
        </div>
        <div className="md:flex md:mt-[20px] md:gap-10 md:ml-[40px] md:mb-[28px]">
          <ContactInput label="CODE POSTAL" input="75008" postCode={true} />
          <ContactInput
            label="TELEPHONE"
            input="06 XX XX XX XX"
            postCode={false}
          />
        </div>
        <ContinueButton />
      </div>
    );
  }
}

export default FormCard4;
