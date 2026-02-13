import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-5">
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-16">
          CONTACT
        </h2>
        
        <div className="flex flex-col gap-12">
          {/* Email */}
          <div className="flex flex-col items-center gap-4">
            <i className='bx bx-envelope text-5xl text-[#e99b63]'></i>
            <h3 className="text-xl md:text-2xl font-light">Email</h3>
            <a 
              href="mailto:sakura.esport26@gmail.com" 
              className="text-base md:text-lg text-gray-400 hover:text-[#e99b63] transition-all duration-300"
            >
              sakura.esport26@gmail.com
            </a>
          </div>

          {/* Discord */}
          <div className="flex flex-col items-center gap-4">
            <i className='bx bxl-discord text-5xl text-[#e99b63]'></i>
            <h3 className="text-xl md:text-2xl font-light">Discord</h3>
            <a 
              href="https://discord.gg/XN8Vna2T" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-gray-400 hover:text-[#e99b63] transition-all duration-300"
            >
              /help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

