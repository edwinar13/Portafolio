function sendmsn() {
    const inputArea = document.getElementById('input-area');
    const input = document.getElementById('input');
    const button = document.getElementById('btn');
    const containerInputs = document.getElementById('container-inputs');


    const feedback = inputArea.value;
    const sender = input.value;

    if (feedback.trim() === '' || sender.trim() === '') {
        alert('Por favor, completa todos los campos.');
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
            inputArea.value = '';
            input.value = '';
            input.style.width = '0';
            inputArea.style.width = '0';
            inputArea.style.opacity = '0.5';



            const feedbackContainer = document.querySelector('.feedback');
            feedbackContainer.style.maxHeight = feedbackContainer.scrollHeight + 'px';


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
                    feedbacksContainer.appendChild(feedbackCardDesc);
                    data.forEach(feedback => {
                        const feedbackCard = createFeedbackCard(feedback.name);
                        feedbacksContainer.appendChild(feedbackCard);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));

            //alert('¡Feedback enviado con éxito!');
            /*
            */


        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el feedback. Por favor, inténtalo nuevamente.');
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

