const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem/lorem.html",
    "/flex_slider": "/pages/flex_slider/flex_slider.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        eval(scripts[i].text);
    }

};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
