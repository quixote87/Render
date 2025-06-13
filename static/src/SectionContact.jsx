
import './CSS/index.css';

function SectionContact() {
  return (
	<section id="contact" className="py-16 bg-gray-50">
		<div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
				<h3 class="text-xl font-semibold">Want to have a chat?</h3>
			</div>
			<ul class="list-disc pl-5 text-gray-700 space-y-2">
			<li>Email me at davidcullinan@gmail.com</li>
			<li>Catch me on my mobile*</li>
			<li>Reach me on LinkedIn (in/david-cullinan-95107161)</li>
			<p>*(and no, I'm not putting my mobile on my page. 20 years ago when I was an idiot and actually wanted business calls perhaps</p>
			</ul>
		</div>
	</section>
  );
}

export default SectionContact;