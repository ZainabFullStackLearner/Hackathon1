document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var form = document.getElementById('resumeForm');
    var preview = document.getElementById('resumePreview');
    var profileImageInput = document.getElementById('profileImage');
    var profileImageSrc = '';
    profileImageInput.addEventListener('change', function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                profileImageSrc = reader_1.result;
                updatePreview();
            };
            reader_1.readAsDataURL(file);
        }
    });
    var fields = {
        name: document.getElementById('name'),
        role: document.getElementById('role'),
        contact: document.getElementById('contact'),
        email: document.getElementById('email'),
        about: document.getElementById('about'),
        education: document.getElementById('education'),
        experience: document.getElementById('experience'),
        skills: document.getElementById('skills'),
    };
    var updatePreview = function () {
        preview.innerHTML = "\n        ".concat(profileImageSrc ? "<img src=\"".concat(profileImageSrc, "\" alt=\"Profile Image\">") : '', "\n        <h2>").concat(fields.name.value || 'Your Name', "</h2>\n        <h3>").concat(fields.role.value || 'Your Role', "</h3>\n        <p><strong>Contact:</strong> ").concat(fields.contact.value || '', ", ").concat(fields.email.value || '', "</p>\n       \n       \n        <p><strong>About Me:</strong> ").concat(fields.about.value || 'Write about yourself...', "</p>\n        <p><strong>Education:</strong> ").concat(fields.education.value || 'Education Details', "</p>\n        <p><strong>Experience:</strong> ").concat(fields.experience.value || 'Work Experience', "</p>\n        <p><strong>Skills:</strong></p>\n        <ul>\n          ").concat((fields.skills.value || '')
            .split(',')
            .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
            .join(''), "\n        </ul>\n      ");
    };
    form.addEventListener('input', updatePreview);
    (_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var printableContent = preview.innerHTML;
        var newWindow = window.open('', '_blank');
        newWindow === null || newWindow === void 0 ? void 0 : newWindow.document.write("\n        <html>\n          <head><title>Generated Resume</title></head>\n          <body style=\"font-family: Arial; padding: 20px; color: #333;\">".concat(printableContent, "</body>\n        </html>\n      "));
        newWindow === null || newWindow === void 0 ? void 0 : newWindow.print();
    });
    updatePreview(); // Initialize preview
});
