//Footer dropdown
const elFooterDropdown = document.querySelectorAll('.links > li');

function footerToggleDropdown() {
    const aantalUitgevouwdFooter = document.querySelectorAll('.links_uitgevouwd');
    this.classList.toggle('links_uitgevouwd');

    // Check of er al andere dropdowns zijn geopend > zo ja? sluit deze dan
    if (aantalUitgevouwdFooter.length > 0) {
        aantalUitgevouwdFooter[0].classList.remove('links_uitgevouwd');
    }
}

for (let i = 0; i < elFooterDropdown.length; i++) {
    elFooterDropdown[i].addEventListener('click', footerToggleDropdown);
}

//Configurator dropdown
const elConfiguratorDropdown = document.querySelectorAll('.configurator > ul > li > span');

function configuratorToggleDropdown() {
    const aantalUitgevouwdConfigurator = document.querySelectorAll('.config_uitgevouwd');
    this.parentElement.classList.toggle('config_uitgevouwd');

    // Check of er al andere dropdowns zijn geopend > zo ja? sluit deze dan
    if (aantalUitgevouwdConfigurator.length > 0) {
        aantalUitgevouwdConfigurator[0].classList.remove('config_uitgevouwd');
    }
}

for (let i = 0; i < elConfiguratorDropdown.length; i++) {
    elConfiguratorDropdown[i].addEventListener('click', configuratorToggleDropdown);
}

//Configurator kleuren
const elConfiguratorKleuren = document.querySelectorAll('.select_clr');
const elConfiguratorImg = document.querySelector('#config_img');

function selecteerKleur() {
    const elGeselecteerdeKleur = document.querySelector('.clr_selected');
    elGeselecteerdeKleur.classList.remove('clr_selected');
    this.classList.add('clr_selected');
    
    //Verander afbeelding. Verander de source van de afbeelding met de dataset genaamd kleur. Deze komt overeen met de naam van de afbeelding.
    elConfiguratorImg.src = './images/config/' + this.dataset.kleur + '.jpeg';
}

for (let i = 0; i < elConfiguratorKleuren.length; i++) {
    elConfiguratorKleuren[i].addEventListener('click', selecteerKleur);
}
