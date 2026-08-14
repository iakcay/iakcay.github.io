document.addEventListener('DOMContentLoaded', () => {
    renderCV();
});

function renderCV() {
    // Personal Info
    document.getElementById('profile-pic').src = cvData.personal.image || 'resim.jpg';
    
    // Fallback if image doesn't exist to prevent broken image icon in dark mode
    document.getElementById('profile-pic').onerror = function() {
        this.style.display = 'none';
        this.parentElement.style.background = 'linear-gradient(135deg, #00ffcc, #3b82f6)';
    };

    document.getElementById('name').textContent = cvData.personal.name;
    document.getElementById('title').textContent = cvData.personal.title;

    // Summary
    document.getElementById('summary-text').textContent = cvData.personal.summary;

    // Contact
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = cvData.contact.map(item => `
        <li><a href="${item.link}" target="${item.link === '#' ? '_self' : '_blank'}"><i class="${item.icon}"></i> ${item.value}</a></li>
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

    // Languages
    const languagesList = document.getElementById('languages-list');
    languagesList.innerHTML = cvData.languages.map(lang => `
        <li><i class="fas fa-language"></i> ${lang}</li>
    `).join('');
    
    // Certificates
    const certificatesList = document.getElementById('certificates-list');
    if (cvData.certificates) {
        certificatesList.innerHTML = cvData.certificates.map(cert => `
            <li><i class="fas fa-certificate"></i> ${cert}</li>
        `).join('');
    }

    // Skills Categorized
    const skillsGrid = document.getElementById('skills-grid');
    if (cvData.skillsCategorized) {
        skillsGrid.innerHTML = cvData.skillsCategorized.map(cat => `
            <div class="skill-category">
                <h4><i class="${cat.icon || 'fas fa-check-circle'}"></i> ${cat.category}</h4>
                <div class="skills-list">
                    ${cat.items.map(skill => `<span>${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

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
    if (cvData.projects) {
        projectsList.innerHTML = cvData.projects.map(project => `
            <div class="project-item">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `).join('');
    }
}
