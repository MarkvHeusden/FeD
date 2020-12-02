const elFooterLinks = document.querySelectorAll('.links > li');

for (let i = 0; i < elFooterLinks.length; i++) {
    elFooterLinks[i].addEventListener('click', function() {
        this.classList.toggle('links_uitgevouwd');
    })
}