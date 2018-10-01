console.log('sup')

document.addEventListener("DOMContentLoaded", function(event) {
    $(".root-container").load("assets/pages/main.html");
    $('#main').on('click', () => {
        $(".root-container").load("assets/pages/main.html");
    });
    $('#aboutus').on('click', () => {
        $(".the-content").load("assets/pages/main.html");

    });
    $('#portfolio').on('click', () => {
        $(".the-content").load("assets/pages/main.html");
    });
});

const test = () => {
    console.log('test')
}