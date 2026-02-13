import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  // Simple function to toggle the mobile menu
  const toggleMobileMenu = () => {
    // Get the Moble Menu Element
    const mobileMenu = document.getElementById('mobileMenu')

    // If it has the 'hidden' class, remove it . otherwise, add it
    if(mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  }

  return (
    <header className="sticky top-0 z-50 relative flex justify-between items-center py-4 px4  lg:px-20">

      <div className="flex items-center gap-4">
        {/* Nouveau bouton externe en haut à gauche */}
        <a 
          href="https://example.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          LIEN EXTERNE
        </a>
      </div>

      <h1 data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-3x1 md:text-4x1 lg:text-5x1 font-light m-0">
       SAKURA
      </h1>

      {/* Desktop Navigation (centrée) */}
      <nav className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
        <Link
          to="/accueil"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50 relative"
        >
          ACCEUIL
        </Link>

        <Link
          to="/nous-rejoindre"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50 relative"
        >
          NOUS-REJOINDRE
        </Link>

        <Link
          to="/tournois"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50 relative"
        >
          TOURNOIS
        </Link>

        <Link
          to="/contact"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50 relative"
        >
          CONTACT
        </Link>

      </nav>

      {/* Bouton SIGNIN supprimé */}

      {/* Mobile Menu Botton - Visible only on Mobile */}
      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i class='bx bx-menu'></i>
      </button>

      {/* Mobile Menu - Hidden by default */}
      <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
        <nav className='flex flex-col gap-6 items-center'>
          <a 
            href="https://example.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)]"
          >
            LIEN EXTERNE
          </a>

          <Link
            to="/accueil"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50"
          >
            ACCEUIL
          </Link>

          <Link
            to="/nous-rejoindre"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50"
          >
            NOUS-REJOINDRE
          </Link>

          <Link
            to="/tournois"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50"
          >
            TOURNOIS
          </Link>

          <Link
            to="/contact"
            className="text-base tracking-wider transition-all duration-300 hover:text-[#e99b63] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(233,155,99,0.8)] z-50"
          >
            CONTACT
          </Link>
        </nav>
      </div>

    </header>
  )     
}

export default Header