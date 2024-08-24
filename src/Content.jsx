import Form from "./forms/Form";

function Content(props) {
  return (
    <div className="  md:h-content md:overflow-hidden">
      <h1 className="text-white-1 text-[28px] font-light w-[336px] m-auto mt-[16px] md:text-[42px] md:ml-[65px] md:mt-[61px] md:w-[788px]">
        DE NOUVELLES ÉMOTIONS COMMENCENT ICI
      </h1>
      <p className="text-white-1 w-[330px] font-normal m-auto mt-[3px] md:w-[590px] md:mt-[8px] md:ml-[65px]">
        Réservez un essai gratuitement en remplissant le formulaire et faites
        connaissance avec l’univers Alfa Romeo.
      </p>
      <Form data={props} />
    </div>
  );
}

export default Content;
