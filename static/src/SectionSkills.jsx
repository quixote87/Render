import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faNetworkWired, faCode, faChartBar, faCertificate } from '@fortawesome/free-solid-svg-icons';
import './CSS/index.css';

function SectionHero() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Management Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faUserTie} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Management</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "IT Strategy", value: 95 },
                { label: "Team Leadership", value: 90 },
                { label: "Budget Management", value: 85 },
                { label: "Vendor Management", value: 88 }
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-600 rounded" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Networking Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faNetworkWired} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Networking</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Network Design", value: 92 },
                { label: "Cisco Technologies", value: 89 },
                { label: "Security Implementation", value: 91 },
                { label: "Cloud Networking", value: 87 }
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-600 rounded" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faCode} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Python", value: 90 },
                { label: "JavaScript", value: 85 },
                { label: "Java", value: 80 },
                { label: "SQL", value: 88 }
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-600 rounded" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Analysis Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faChartBar} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Data Analysis</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Data Visualization", value: 87 },
                { label: "Power BI", value: 85 },
                { label: "Machine Learning", value: 75 },
                { label: "Big Data", value: 78 }
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-600 rounded" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Bachelor Information Technology",
              "Graduate Certificate Business Management",
              "Cert IV Training and Assessment",
              "Data Analytics Microcredential (Charles Sturt)"
            ].map((cert, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <FontAwesomeIcon icon={faCertificate} className="text-yellow-500 text-3xl mb-2" />
                <p className="font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
