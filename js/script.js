// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Agent Carousel Initialization
    const agents = [
        { name: "Angelica", image: "images/angelica.png", link: "agents/angelica.html", description: "Angelica specializes in executive recruitment, focusing on C-suite and senior management positions. Her expertise ensures perfect matches for high-level roles." },
        { name: "Arnold", image: "images/arnold.png", link: "agents/arnold.html", description: "Arnold is our technical expert, specializing in software development and IT roles. He finds the best tech talent for innovative companies." },
        { name: "Dexter", image: "images/dexter.png", link: "agents/dexter.html", description: "Dexter excels in scientific recruitment. His analytical approach helps place top talent in pharmaceutical and research institutions." },
        { name: "Daria", image: "images/daria.png", link: "agents/daria.html", description: "Daria focuses on creative industry recruitment, connecting talented artists and designers with innovative companies." }
    ];
    const carouselInner = document.getElementById('carousel-inner');

    agents.forEach((agent, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
        carouselItem.innerHTML = `
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4 text-center">
                    <a href="${agent.link}">
                        <img src="${agent.image}" class="d-block w-150" alt="${agent.name}">
                    </a>
                </div>
                <div class="col-md-6">
                    <h3><a href="${agent.link}">${agent.name}</a></h3>
                    <p>${agent.description}</p>
                </div>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
    });
});