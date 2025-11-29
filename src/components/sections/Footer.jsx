export const Footer = () => {
  return (
    <footer className="bg-black/70 text-gray-300 py-8 mt-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Branding */}
          <p className="text-lg font-semibold">
            © {new Date().getFullYear()} <span className="text-blue-400">Mahin Sharon</span>
          </p>

          {/* Links */}
          <div className="flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/mahinsharon1"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mahinsharon"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mahinsharon85@gmail.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              Email
            </a>
          </div>

        </div>

        <p className="text-xs text-center mt-6 opacity-70">
          Designed & Developed by Mahin Sharon
        </p>
      </div>
    </footer>
  );
};
