import Form from "./forms/Form";

function Content(props) {
  return (
    <div className={`md:h-content md:overflow-hidden`}>
      <h1 className="text-white-1 text-[28px] font-light w-[336px] m-auto mt-[16px] md:text-[42px] md:ml-[65px] md:mt-[61px] md:w-[788px]">
        DE NOUVELLES ÉMOTIONS COMMENCENT ICI
      </h1>
      <p className="text-white-1 w-[330px] font-normal m-auto mt-[3px] md:w-[590px] md:mt-[8px] md:ml-[65px]">
        Réservez un essai gratuitement en remplissant le formulaire et faites
        connaissance avec l’univers Alfa Romeo.
      </p>
      <Form data={props} />
      {props.form4 && (
        <div className="w-[90%] h-[60%]  md:w-[618px] text-white-1 text-[18px] md:text-[24px] md:h-[50%] font-normal bg-forms backdrop-blur-xl rounded-[10px] m-auto md:ml-[65px] mt-[50px] pt-[15%] md:pt-0 md:flex md:justify-center md:items-center">
          <p className="w-[296px] h-[135px] md:w-[490px]  md:h-[116px] m-auto md:m-0 mb-[13%] md:mb-0  leading-6">
            Votre réservation a bien été prise en compte. <br /> <br /> Vous
            serez contacté dans <u>un délai de 48H.</u>
          </p>
          <p className="md:absolute text-center md:right-8 md:bottom-8  pb-[10%] md:pb-0">
            L’équipe Alfa Romeo, vous remercie.
          </p>
        </div>
      )}
    </div>
  );
}

export default Content;
