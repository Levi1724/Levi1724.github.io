document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const body = document.body;
    const messageContainer = document.querySelector('.message-container');
    const anniversaryMessage = document.querySelector('.anniversary-message');
    const loveMessage = document.querySelector('.love-message');

    let rainInterval;
    const teAmoWords = [];

    // Función para iniciar la lluvia de "Te amo"
    function startTeAmoRain() {
        if (rainInterval) return; // Evita iniciar múltiples intervalos

        rainInterval = setInterval(() => {
            const word = document.createElement('div');
            word.textContent = 'Te amo';
            word.classList.add('te-amo-word');
            word.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
            word.style.animationDuration = `${Math.random() * 4 + 4}s`; // Duración de la animación aleatoria (más larga)
            word.style.fontSize = `${Math.random() * 1 + 1.5}em`; // Tamaño de fuente aleatorio
            word.style.animationDelay = `${Math.random() * 0.8}s`; // Pequeño retraso para que no aparezcan todas a la vez
            body.appendChild(word);
            teAmoWords.push(word);

            // Eliminar la palabra una vez que termine su animación para no sobrecargar el DOM
            word.addEventListener('animationend', () => {
                word.remove();
                teAmoWords.splice(teAmoWords.indexOf(word), 1);
            });
        }, 150); // Frecuencia de aparición de las palabras (más frecuente)
    }

    // Paso 1: El corazón aparece
    heart.addEventListener('animationend', (event) => {
        if (event.animationName === 'appearHeart') {
            // Paso 2: El corazón brilla, cubre la pantalla de rosado y luego transiciona a rojo
            heart.classList.add('shining-and-covering');

            // Una vez que el corazón empieza a expandirse y cubrir la pantalla (rosado)
            // Empezar a llover las palabras "Te amo" encima de ese fondo.
            setTimeout(() => {
                startTeAmoRain();
            }, 100); // Inicia la lluvia después de 1 segundo de que el corazón comienza a expandirse.
                     // Esto asegura que haya un fondo rosado visible.

            // Retraso para el cambio de fondo de rojo a negro
            setTimeout(() => {
                body.style.backgroundColor = '#000'; // Inicia la transición a negro
            }, 350); // Espera a que la animación 'shineAndCover' del corazón haya terminado su transición a rojo
                     // (2.5 segundos de la animación + un pequeño buffer).

            // Mostrar los mensajes finales después de un tiempo.
            // La lluvia NO se detiene y continúa en segundo plano.
            setTimeout(() => {
                heart.style.display = 'none'; // Ocultar el corazón una vez que los mensajes aparecen

                messageContainer.classList.add('show');
                anniversaryMessage.textContent = '¡Feliz aniversario!';
                loveMessage.textContent = '¡Te Amo mucho Rossy!';
            }, 9000); // Ajusta este tiempo para la duración total antes de que aparezcan los mensajes.
                      // Considera los 2.5s de la expansión del corazón + el tiempo que quieres que dure la lluvia antes de los mensajes.
        }
    }, { once: true }); // El evento solo se dispara una vez.
});
