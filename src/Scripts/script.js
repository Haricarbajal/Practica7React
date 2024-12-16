// script.js
export async function loadNews() {
    try {
        const response = await fetch('https://news-foniuhqsba-uc.a.run.app');
        if (!response.ok) {
            throw new Error('Error al intentar obtener las noticias');
        }

        const articles = await response.json();
        //console.log(articles);
    } catch (error) {
        console.error('Error: ', error);
    }
}
