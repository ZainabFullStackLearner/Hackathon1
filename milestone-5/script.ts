// Select DOM elements

declare const html2pdf: any;


const copyLinkButton = document.getElementById('copyLink') as HTMLButtonElement;
const downloadPDFButton = document.getElementById('downloadPDF') as HTMLButtonElement;

function downloadResumePDF(): void {
    const resumeContainer = document.querySelector('.resume-container') as HTMLElement;
    const actionButtons = document.querySelector('.share-download') as HTMLElement;

    // Temporarily hide the buttons
    actionButtons.style.display = 'none';

    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf()
        .set(opt)
        .from(resumeContainer)
        .save()
        .then(() => {
            // Restore the buttons after the PDF is generated
            actionButtons.style.display = 'block';
        });
}

downloadPDFButton.addEventListener('click', downloadResumePDF);

