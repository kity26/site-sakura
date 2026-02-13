import 'boxicons/css/boxicons.min.css';

const Reseaux = () => {
  const reseaux = [
    {
      nom: 'Twitch',
      url: 'https://www.twitch.tv/skaesport',
      icon: 'bx-logo-twitch',
      couleur: 'hover:text-[#9146FF]'
    },
    {
      nom: 'Instagram',
      url: 'https://www.instagram.com/sakura_e.sport/',
      icon: 'bxl-instagram',
      couleur: 'hover:text-[#E4405F]'
    },
    {
      nom: 'TikTok',
      url: 'https://www.tiktok.com/@sakura.esport6',
      icon: 'bxl-tiktok',
      couleur: 'hover:text-[#000000]'
    },
    {
      nom: 'X (Twitter)',
      url: 'https://x.com/Sakura_Teams',
      icon: 'bxl-twitter',
      couleur: 'hover:text-[#1DA1F2]'
    },
    {
      nom: 'YouTube',
      url: 'https://www.youtube.com/@Sakura-Teams',
      icon: 'bxl-youtube',
      couleur: 'hover:text-[#FF0000]'
    },
    {
      nom: 'Discord',
      url: 'https://discord.gg/XN8Vna2T',
      icon: 'bxl-discord',
      couleur: 'hover:text-[#5865F2]'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-5xl font-light mb-8 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          RÉSEAUX
        </h1>
        
        <p 
          className="text-center text-lg mb-16 text-gray-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Retrouvez-nous sur nos réseaux sociaux
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {reseaux.map((reseau, index) => (
            <a
              key={index}
              href={reseau.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center p-8 border border-[#e99b63] rounded-lg transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(233,155,99,0.8))]"
            >
              <i className={`bx ${reseau.icon} text-6xl mb-4 transition-colors duration-300 ${reseau.couleur}`}></i>
              <p className="text-base tracking-wider text-center">{reseau.nom}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reseaux
