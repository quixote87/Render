
import './CSS/index.css';

function SectionHero() {
  return (
	<section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Professional & Technology Leader</h1>
                <p className="text-xl mb-6">Specializing in IT Management, Network Infrastructure, Software Development, and Data Analytics</p>
                <div className="flex space-x-4">
                    <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Me</a>
                    <a href="#" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Download CV</a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img src="./src/assets/DavePic.jpg" 
						alt="Dave Cullinan" 
						className="w-full h-full object-cover"/>
                    </div>
                    <div className="absolute -bottom-5 -right-5 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
                        <p className="font-bold text-lg">20+ Years</p>
                        <p className="text-sm">Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SectionHero;