const barbers = [
    {
        name: "Марлонд Макдональд",
        photo: "assets/images/barb1.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "https://instagram.com/marlon_barber"
    },
    {
        name: "Джеррі Бенкс",
        photo: "assets/images/barb2.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    },
    {
        name: "Джон Бейлі",
        photo: "assets/images/barb3.png",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    },
    {
        name: "Діана Джордан",
        photo: "assets/images/barb4.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    },
    {
        name: "Джейк Ріверс",
        photo: "assets/images/barb5.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    },
    {
        name: "Памела Бейлі",
        photo: "assets/images/barb6.webp",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    }
];

    const container = document.getElementById('barbersContainer');

    function createBarberCard(barber) {
        const block = document.createElement('div');
        block.className = 'b-block';

        block.innerHTML = `
            <img src="${barber.photo}" alt="${barber.name}" class="barb-first-img">
            <h3>${barber.name}</h3>
            <div class="img-row">
                <a href="${barber.facebook}" target="_blank">
                    <img src="assets/images/icons/facebook.svg" alt="Facebook">
                </a>
                <a href="${barber.twitter}" target="_blank">
                    <img src="assets/images/icons/twitter.svg" alt="Twitter">
                </a>
                <a href="${barber.instagram}" target="_blank">
                    <img src="assets/images/icons/instagram.svg" alt="Instagram">
                </a>
            </div>
            <button class="barb">
                <a href="#contact">Записатися</a>
            </button>
        `;

        return block;
    }

    barbers.forEach(barber => {
        const card = createBarberCard(barber);
        container.appendChild(card);
    });