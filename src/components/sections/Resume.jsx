import { RevealOnScroll } from "../RevealOnScroll";

export const Resume = () => {
  const resumeUrl = "/MahinSharon-portfolio/resume.pdf";

  return (
    <section id="Resume" className="py-16 px-4">
      <RevealOnScroll>
        <div className="w-full max-w-md mx-auto">
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            My Resume
          </h2>

          <div className="glass p-6 sm:p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all">
            <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
              Interested in working together? You can view my full professional
              background or download a copy for your records.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-blue-500 text-white py-3 px-6 sm:px-8 rounded-full font-medium transition-all hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download="My_Resume.pdf"
                className="w-full sm:w-auto text-center border border-blue-500 text-blue-500 py-3 px-6 sm:px-8 rounded-full font-medium transition-all hover:bg-blue-500/10"
              >
                Download PDF
              </a>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
