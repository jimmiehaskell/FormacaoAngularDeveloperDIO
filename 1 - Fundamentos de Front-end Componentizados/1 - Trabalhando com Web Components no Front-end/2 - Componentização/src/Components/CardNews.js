class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    // base component
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        // cardLeft
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");
        cardLeft.appendChild(author);

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        cardLeft.appendChild(linkTitle);

        const paragraph = document.createElement("p");
        paragraph.textContent = this.getAttribute("content");
        cardLeft.appendChild(paragraph);
        // end cardLeft

        // cardRight
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "../assets/imgs/foto-default.png";
        newsImage.alt = "Foto do Darth Vader";
        cardRight.appendChild(newsImage);
        // end cardRight

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    // style component
    style() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                box-shadow: 5px 5px 5px 4px rgba(194,194,194,1);
                -webkit-box-shadow: 5px 5px 5px 4px rgba(194,194,194,1);
                -moz-box-shadow: 5px 5px 5px 4px rgba(194,194,194,1);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 20px;
            }

            .card__left, .card__right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card__left > span {
                font-weight: 400;
            }

            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                text-decoration: none;
                color: black;
                font-weight: bold;
            }

            .card__left > p {
                color: gray;
            }

            .card__right > img {
                width: 200px;
                height: 200px;
            }
        `;

        return style;
    }

    // send component to shadow
}

customElements.define("card-news", CardNews);