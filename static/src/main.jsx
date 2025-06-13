import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import PageHeader from './PageHeader.jsx'
import SectionHero from './SectionHero.jsx'
import SectionAbout from './SectionAbout.jsx'
import SectionSkills from './SectionSkills.jsx'
import SectionExperience from './SectionExperience.jsx'
import SectionProject from './SectionProject.jsx'
import SectionContact from './SectionContact.jsx'
import PageFooter from './PageFooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageHeader />
	<SectionHero />
	<SectionAbout />
	<SectionSkills />
	<SectionExperience />
	<SectionProject />
	<SectionContact />
	<PageFooter />
  </StrictMode>
)
