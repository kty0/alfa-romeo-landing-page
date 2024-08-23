function Footer() {
  return (
    <footer className=" h-small-footer md:h-header-footer flex justify-center items-center">
      <ol className="text-size-footer text-color-footer w-small-footer-ol h-small-footer-ol md:w-img md:h-img md:list-none flex gap-2 flex-col md:flex-row justify-evenly md:items-center">
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
