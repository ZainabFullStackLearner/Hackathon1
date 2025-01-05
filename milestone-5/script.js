// Select DOM elements
var copyLinkButton = document.getElementById('copyLink');
var downloadPDFButton = document.getElementById('downloadPDF');
function downloadResumePDF() {
    var resumeContainer = document.querySelector('.resume-container');
    var actionButtons = document.querySelector('.share-download');
    // Temporarily hide the buttons
    actionButtons.style.display = 'none';
    var opt = {
        margin: 1,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf()
        .set(opt)
        .from(resumeContainer)
        .save()
        .then(function () {
        // Restore the buttons after the PDF is generated
        actionButtons.style.display = 'block';
    });
}
downloadPDFButton.addEventListener('click', downloadResumePDF);
