window.onload = () => {
    window.addEventListener("scroll", ()=> {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;

        let barre = position / hauteur * largeur;

        document.getElementById('vertical-timeline::before').style.width = barre + 'px';
    });
}