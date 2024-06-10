document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var params = {
            name: document.getElementById('name').value,
            rg: document.getElementById('rg').value,
            aluno: document.querySelector('input[name="aluno"]:checked').value
        };

        console.log('Enviando e-mail com os seguintes parâmetros:', params);

        emailjs.send('service_ziks0qi', 'template_d74iyzw', params)
            .then(function(response) {
                alert('Dados enviados com sucesso!');
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert('Ocorreu um erro ao enviar os dados.');
                console.error('FAILED...', error);
            });
    });
});
