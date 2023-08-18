const btnSend = document.getElementById('btn-send');
const iconSend = document.getElementById('icon-send');
btnSend.addEventListener('click', sendmsn);
iconSend.addEventListener('click', sendmsn);


function sendmsn() {
    const inputArea = document.getElementById('input-area');
    const input = document.getElementById('input');
    const buttonbg = document.querySelector('.button-bg');
    const containerInputs = document.getElementById('container-inputs');



    const feedback = inputArea.value;
    const sender = input.value;
    if (feedback.trim() === '' || sender.trim() === '') {
        showAlert('Por favor, completa todos los campos.');
        return;
    }

    // Envío del feedback a la API
    const url = 'https://flask-production-49a1.up.railway.app/api/feedbacks';
    const data = {
        name: sender,
        description: feedback
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

    })
        .then(response => response.json())
        .then(data => {

            //input.classList.toggle("input-hide");
            input.value = '';
            input.style.width = '0';
            input.style.padding = '0';
            input.style.border = 'none';

            //inputArea.classList.toggle("input-hide");
            inputArea.value = '';
            inputArea.placeholder = '';
            inputArea.style.width = '0';
            inputArea.style.padding = '0';
            inputArea.style.overflow = 'hidden';
            inputArea.style.opacity = '0.5';


            const feedbackContainer = document.querySelector('.feedback');
            feedbackContainer.style.maxHeight = feedbackContainer.scrollHeight + 'px';

            setTimeout(() => {
                input.style.display = 'none';
            }, 1000);
            setTimeout(() => {
                feedbackContainer.style.maxHeight = '0';
            }, 1000);
            setTimeout(() => {
                inputArea.style.display = 'none';
            }, 2000);
            setTimeout(() => {
                containerInputs.classList.add('hidden');
            }, 2000);
            setTimeout(() => {
                containerInputs.style.display = 'none';
            }, 3000);


            // Obtener datos de la API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    records = data.length
                    const feedbackCardDesc = createFeedbackCardDescripction(records)


                    setTimeout(() => {
                        feedbacksContainer.appendChild(feedbackCardDesc);
                        data.forEach(feedback => {
                            const feedbackCard = createFeedbackCard(feedback.name);
                            feedbacksContainer.appendChild(feedbackCard);

                        });
                    }, 1000)


                })
                .catch(error => console.error('Error fetching data:', error));

            //alert('¡Feedback enviado con éxito!');


        })
        .catch(error => {
            console.error('Error:', error);
            showAlert('Hubo un error al enviar el feedback.');
        });
}




const feedbacksContainer = document.getElementById('feedback-cards');
const apiUrl = 'https://flask-production-49a1.up.railway.app/api/feedbacks';

// Función para crear una tarjeta con nombre
function createFeedbackCard(name) {
    const card = document.createElement('div');
    card.classList.add('feedback-card');
    card.textContent = name;
    return card;
}

function createFeedbackCardDescripction(records) {
    const card = document.createElement('div');
    card.classList.add('feedback-card-description');
    card.textContent = `Ya eres parte de las ${records} personas que me ha ayudado con mi crecimiento profesional, por lo cual quiero expresar mi sincero agradecimiento por tu valioso mensaje. Estoy profundamente agradecido por tu tiempo y amabilidad al ser parte de este viaje. ¡Gracias de corazón! `;
    return card;
}



const alertContainer = document.getElementById('alertContainer');
const alertMessage = document.getElementById('alertMessage');


function showAlert(message) {
    alertMessage.textContent = message;
    alertContainer.style.display = 'block';
    alertContainer.style.width = '300px';
    setTimeout(() => {
        alertContainer.style.width = '0px';
    }, 3000);
    setTimeout(() => {
        alertContainer.style.display = 'none';
    }, 3500);
}