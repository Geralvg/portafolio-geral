const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/geraldine-vasquez-gutierrez-546518346/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:scale-110 transition-transform"
          >
            <img
              src="/assets/linkedln.png"
              alt="linkedin"
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Geraldine Vasquez. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;