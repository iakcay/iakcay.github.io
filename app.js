document.addEventListener('DOMContentLoaded', () => {
    renderCV();
});

function renderCV() {
    // Personal Info
    document.getElementById('profile-pic').src = cvData.personal.image;
    document.getElementById('name').textContent = cvData.personal.name;
    document.getElementById('title').textContent = cvData.personal.title;

    // Hero Section - Removed from HTML, removing from JS to prevent crash
    // if (document.getElementById('hero-name')) {
    //    document.getElementById('hero-name').textContent = `Merhaba, Ben ${cvData.personal.name.split(' ')[0]}`;
    //    document.getElementById('hero-title').textContent = cvData.personal.title;
    // }

    // Summary
    document.getElementById('summary-text').textContent = cvData.personal.summary;

    // Contact
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = cvData.contact.map(item => `
        <li><a href="${item.link}"><i class="${item.icon}"></i> ${item.value}</a></li>
    `).join('');

    // Education
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = cvData.education.map(edu => `
        <div class="education-item">
            <p class="degree">${edu.degree}</p>
            <p class="school">${edu.school}</p>
            <p class="year">${edu.year}</p>
        </div>
    `).join('');

    // Skills
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = cvData.skills.map(skill => `<span>${skill}</span>`).join('');

    // Languages
    const languagesList = document.getElementById('languages-list');
    languagesList.innerHTML = cvData.languages.map(lang => `<li>${lang}</li>`).join('');

    // Experience
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = cvData.experience.map(job => `
        <div class="job-item">
            <div class="job-header">
                <h3>${job.title}</h3>
                <span class="date">${job.date}</span>
            </div>
            <div class="company">${job.company}</div>
            <ul class="job-details">
                ${job.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Projects
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = cvData.projects.map(project => `
        <div class="project-item">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `).join('');
}
