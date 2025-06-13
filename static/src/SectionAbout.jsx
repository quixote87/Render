import './CSS/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartLine, faProjectDiagram, faNetworkWired, faUsd } from '@fortawesome/free-solid-svg-icons';

const stats = [
  { icon: faProjectDiagram, label: '20+ Projects' },
  { icon: faNetworkWired, label: 'Network Expertise' },
  { icon: faChartLine, label: 'Data Analytics' },
  { icon: faUsd, label: '$500k+ in efficiency improvements' },
  { icon: faUsd, label: 'Over a thousand hours of automations developed' },
];

function SectionAbout() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-3/4 md:w-full max-w-xs">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="John Doe working"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a seasoned IT professional with comprehensive experience in technology leadership roles. My career has spanned IT management, network architecture, software development, data analysis, and project delivery across multiple industries.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With a strong technical foundation and business acumen, I bridge the gap between technology and business objectives. I'm passionate about implementing innovative solutions that drive efficiency, security, and growth.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {stats.map(({ icon, label }) => (
                <div key={label} className="bg-gray-100 p-4 rounded-lg text-center">
                  <div className="text-blue-600 text-2xl mb-2">
                    <FontAwesomeIcon icon={icon} aria-hidden="true" />
                  </div>
                  <p className="font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
