let mainForm = document.querySelector('#mainForm');

mainForm.addEventListener('submit', function (e) {

    e.preventDefault(); // Evita lo que viene por defecto, osea enviar el form
    console.log('Diste click');

    let data = new FormData(mainForm); // Capturando los datos de los campos

    console.log(data.get('name')); // Apuntando al valor name del input name

    fetch('showpost.php', {
        method: 'POST',
        body: data
    })
})