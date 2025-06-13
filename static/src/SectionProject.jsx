import React from 'react';
import './CSS/index.css';
import MerakiProject from './assets/MerakiProject.jpg';
import OfficeJourney from './assets/365.jpg';
const projects = [
	{
	title: "Enterprise Network Upgrade",
	tech: "Cisco Meraki",
	description: "Led the design and implementation of a Meraki network infrastructure to replace MPLS that saved our company over $400,000 in network costs over three years",
	image: MerakiProject,
	tags: ["Network Design", "Security", "Cloud Integration"],
	},
	{
	title: "Data Analytics for branch mergers",
	tech: "PowerQuery and AI",
	description: "Developed a custom data pipeline in PowerQuery that could transform incoming inventory data into a Pronto ERM capable digest, saving hundreds of hours of work",
	image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	tags: ["Power Query", "Data Visualization", "Automation"],
	},
	{
	title: "M365 Journey",
	tech: "ITIL",
	description: "From a blank canvas, I designed and built a tailored SharePoint platform (simultaneously bringing in data from the old 2013 server), migrated the entire organisation to Intune for modern device management, and implemented over a dozen business-critical automations - streamlining operations and enabling true digital collaboration.",
	image: OfficeJourney,
	tags: ["M365", "Sharepoint", "Intune", "Power Automate", "PowerApps"],
	},
];

const flipCards = [
  {
    icon: "fas fa-cloud",
    frontTitle: "Cloud Migration",
    backTitle: "Hybrid Cloud Implementation",
    backDesc: "Led migration of core business applications to AWS while maintaining key on-prem systems, achieving 99.99% uptime."
  },
  {
    icon: "fas fa-lock",
    frontTitle: "Security Framework",
    backTitle: "Enterprise Security",
    backDesc: "Designed and implemented Zero Trust security model that reduced security incidents by 60% in the first year."
  },
  {
    icon: "fas fa-chart-line",
    frontTitle: "BI Dashboard",
    backTitle: "Executive Dashboard",
    backDesc: "Created interactive Power BI dashboards that became the standard for executive reporting across the organization."
  }
];

function SectionProjects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>

        {/* Standard Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{project.tech}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flip Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {flipCards.map((card, index) => (
            <div key={index} className="relative group h-64 perspective">
              <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-center items-center shadow-lg">
                  <i className={`${card.icon} text-4xl mb-4`}></i>
                  <h3 className="text-xl font-bold text-center">{card.frontTitle}</h3>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg p-6 flex flex-col justify-center shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{card.backTitle}</h3>
                  <p className="text-gray-700 text-sm">{card.backDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
