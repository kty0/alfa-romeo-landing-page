import { useState } from "react";
import ContinueButton from "../buttons/ContinueButton";
import ContactInput from "./ContactInput";

function FormCard4(props) {
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [postCodeValid, setPostCodeValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  if (!props.form4) {
    return (
      <>
        <div className="w-[340px] m-auto bg-forms overflow-y-scroll md:overflow-hidden backdrop-blur-md rounded-[10px] mt-[50px] md:w-[618px] md:ml-[65px]">
          <p className="text-white-1 text-[16px] md:text-[24px] font-semibold w-[86%] md:w-[500px] m-auto md:ml-[40px] pt-[37px] mb-[20px]">
            Vos coordonnées :
          </p>
          <div className="md:flex md:gap-11 md:mb-[40px] md:ml-[40px]">
            <ContactInput
              label="PRÉNOM"
              input="Écrire"
              postCode={false}
              tel={false}
              setData={props.data.data.setFirstName}
              dataValid={setFirstNameValid}
            />
            <ContactInput
              label="NOM"
              input="Écrire"
              postCode={false}
              tel={false}
              setData={props.data.data.setLastName}
              dataValid={setLastNameValid}
            />
          </div>
          <div className="md:flex md:mt-[20px] md:gap-10 md:ml-[40px] md:mb-[28px]">
            <ContactInput
              label="CODE POSTAL"
              input="75008"
              postCode={true}
              tel={false}
              setData={props.data.data.setPostCode}
              dataValid={setPostCodeValid}
            />
            <ContactInput
              label="TELEPHONE"
              input="06 XX XX XX XX"
              postCode={false}
              tel={true}
              setData={props.data.data.setPhone}
              dataValid={setPhoneValid}
            />
          </div>
          <ContinueButton
            firstName={firstNameValid}
            lastName={lastNameValid}
            postCode={postCodeValid}
            phone={phoneValid}
            setPopUp={props.data.data.setPopUp}
          />
        </div>
      </>
    );
  }
}

export default FormCard4;
