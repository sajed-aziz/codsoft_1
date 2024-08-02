document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('.project .btn');
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close');

    projectButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const project = this.closest('.project');
            const projectImages = project.querySelector('.project-images');

            if (projectImages) {
                modalContent.innerHTML = projectImages.innerHTML;
                modal.style.display = 'block';
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
