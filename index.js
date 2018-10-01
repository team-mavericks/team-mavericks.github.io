console.log('sup')

document.addEventListener("DOMContentLoaded", function(event) {
    $(".root-container").load("assets/pages/main.html");
    $('#main').on('click', () => {
        $(".root-container").load("assets/pages/main.html");
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
});

const test = () => {
    console.log('test')
}