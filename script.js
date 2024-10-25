document.addEventListener('DOMContentLoaded', () => {
    const dropbtns = document.querySelectorAll('.dropbtn');
    const dropdownContents = document.querySelectorAll('.dropdown-content');

    dropbtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            dropdownContents[index].classList.toggle('show');
            dropdownContents.forEach((content, contentIndex) => {
                if (contentIndex !== index) {
                    content.classList.remove('show');
                }
            });
        });
    });
});
