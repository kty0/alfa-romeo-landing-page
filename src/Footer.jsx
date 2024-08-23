function Footer() {
  return (
    <footer className=" h-small-footer md:h-header-footer flex justify-center items-center mt-[24px] mb-[24px] md:mt-0 md:mb-0">
      <ol className="text-size-footer text-white-1 w-[300px] h-[120px] flex gap-3 flex-col md:w-[100%] md:h-[100%] md:list-none md:flex-row justify-evenly md:items-center">
        <li>POLITIQUE DE CONFIDENTIALITÉ</li>
        <li>CONDITIONS GÉNÉRALES D'UTILISATION</li>
        <li>RÉGLEMENTATION - LOI AGEC</li>
        <li>COOKIE</li>
        <li>DROITS D"AUTEUR</li>
      </ol>
    </footer>
  );
}

export default Footer;
