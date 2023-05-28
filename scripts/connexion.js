new Vivus('logo', { duration: 100 });

const dialog = connexion.html.getElementById('dialog');
const invite = connexion.html.getElementById('invite');
const annuler = connexion.html.getElementById('annuler');

invite.addEventListener('click', function(){
    dialog.setAttribute('open', true);
})

annuler.addEventListener('click', function(){
    dialog.removeAttribute('open')
});
