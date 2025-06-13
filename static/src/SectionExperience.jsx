import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './CSS/index.css';

function SectionExperience() {
  const experienceItems = [
    {
      role: "IT Director",
      period: "2019 - Present",
      company: "TechSolutions Inc.",
      responsibilities: [
        "Lead IT strategy and digital transformation initiatives across the organization",
        "Manage a team of 25+ IT professionals across infrastructure, development, and support",
        "Oversaw $5M infrastructure upgrade project that improved system reliability by 40%",
        "Implemented data analytics platform that reduced operational costs by 15%"
      ]
    },
    {
      role: "Senior IT Manager",
      period: "2016 - 2019",
      company: "Global Systems Corp.",
      responsibilities: [
        "Managed network infrastructure supporting 500+ employees across 3 continents",
        "Led migration to cloud services, reducing on-prem infrastructure costs by 30%",
        "Implemented security framework that achieved ISO 27001 certification",
        "Developed cross-functional project management methodology used company-wide"
      ]
    },
    {
      role: "IT Systems Architect",
      period: "2013 - 2016",
      company: "DataNet Technologies",
      responsibilities: [
        "Designed and implemented enterprise network architecture supporting 10,000+ users",
        "Developed custom monitoring solutions that reduced downtime incidents by 60%",
        "Created data analysis tools that improved decision-making for key business units",
        "Mentored junior engineers and led technical training programs"
      ]
    },
    {
      role: "Network Engineer",
      period: "2011 - 2013",
      company: "Connect Solutions",
      responsibilities: [
        "Implemented and maintained Cisco-based network infrastructure",
        "Developed automation scripts that reduced manual configuration time by 70%",
        "Participated in 24/7 on-call rotation for critical network issues",
        "Documented network architecture and created troubleshooting guides"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Experience</h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 relative">
            {experienceItems.map((item, idx) => (
              <div key={idx} className="relative timeline-item pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faBriefcase} className="text-white" />
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <span className="text-blue-600 font-medium">{item.period}</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-3">{item.company}</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {item.responsibilities.map((responsibility, rIdx) => (
                      <li key={rIdx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionExperience;
