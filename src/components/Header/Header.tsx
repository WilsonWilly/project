import  Image from 'next/image';
import Logo from '/var/www/html/projet-2-o-jeux-de-societe-front/public/asset/images/logo-main-ojds.png';
import StarPenguin from '/asset/images/penguin-note.png';

function Header() {
  return (
    <header className="flex justify-between items-center p-5 ">
      <div>

        <Image 
            src='/image/logo-main-ojds.png'
            alt="Logo du site"
            width={80}
            height={80}
            />
        <div> titre de la page </div>
      </div>
      <div>
        <div className="">se connecter</div>
        <div>Si admin</div>
      </div>
    </header>
  );
}

export default Header;