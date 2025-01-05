
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const preview = document.getElementById('resumePreview') as HTMLElement;
    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
  
    let profileImageSrc = '';
  
    profileImageInput.addEventListener('change', (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          profileImageSrc = reader.result as string;
          updatePreview();
        };
        reader.readAsDataURL(file);
      }
    });
  
    const fields = {
      name: document.getElementById('name') as HTMLInputElement,
      role: document.getElementById('role') as HTMLInputElement,
      contact: document.getElementById('contact') as HTMLInputElement,
      email: document.getElementById('email') as HTMLInputElement,
      
      about: document.getElementById('about') as HTMLTextAreaElement,
      education: document.getElementById('education') as HTMLTextAreaElement,
      experience: document.getElementById('experience') as HTMLTextAreaElement,
      skills: document.getElementById('skills') as HTMLTextAreaElement,
    };
  
    const updatePreview = () => {
      preview.innerHTML = `
        ${profileImageSrc ? `<img src="${profileImageSrc}" alt="Profile Image">` : ''}
        <h2>${fields.name.value || 'Your Name'}</h2>
        <h3>${fields.role.value || 'Your Role'}</h3>
        <p><strong>Contact:</strong> ${fields.contact.value || ''}, ${fields.email.value || ''}</p>
       
       
        <p><strong>About Me:</strong> ${fields.about.value || 'Write about yourself...'}</p>
        <p><strong>Education:</strong> ${fields.education.value || 'Education Details'}</p>
        <p><strong>Experience:</strong> ${fields.experience.value || 'Work Experience'}</p>
        <p><strong>Skills:</strong></p>
        <ul>
          ${(fields.skills.value || '')
            .split(',')
            .map((skill) => `<li>${skill.trim()}</li>`)
            .join('')}
        </ul>
      `;
    };
  
    form.addEventListener('input', updatePreview);
  
    document.getElementById('generateBtn')?.addEventListener('click', () => {
      const printableContent = preview.innerHTML;
      const newWindow = window.open('', '_blank');
      newWindow?.document.write(`
        <html>
          <head><title>Generated Resume</title></head>
          <body style="font-family: Arial; padding: 20px; color: #333;">${printableContent}</body>
        </html>
      `);
      newWindow?.print();
    });
  
    updatePreview(); // Initialize preview
  });
  