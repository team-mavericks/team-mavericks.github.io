console.log('sup')

document.addEventListener("DOMContentLoaded", function(event) {
    console.log('document ready scripts loaded!')
    $(".root-container").load("assets/pages/main.html");
    loadRoutes()
    
});


const loadRoutes = () => {
    $(".root-container").ready(() => {
        console.log('routing scripts loaded!')
        $('#main').on('click', () => {
            $(".root-container").load("assets/pages/main.html");
            loadRoutes();
            event.preventDefault();
            console.log('main')
        });
        $('#aboutus').on('click', () => {
            $(".the-content").load("assets/pages/aboutus.html");
            event.preventDefault();
            console.log('aboutus')
            
        });
        $('#portfolio').on('click', () => {
            $(".the-content").load("assets/pages/portfolio.html");
            event.preventDefault();
            console.log('portfolio')
        });
    })
}