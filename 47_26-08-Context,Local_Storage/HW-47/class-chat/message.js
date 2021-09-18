class Message{
    constructor(userId, title, text, date) {
        this.userId = userId;
        this.title = title;
        this.text = text;
        this.date = date;
        this.comments = [];
        this.id=Message.id++
    }
    static id = 0;

    renderMessage() {
        return `
        <div  data-message="${this.id}">
            <h4>${this.title}</h4>
            <p>${this.text}</p>
            <p>Published: ${this.date}</p>
        </div>
        `
    }

    renderFullInfo() {
        return `
        <div>
            <h3>${this.title}</h3>
            <p>${this.text}</p>
            <h4> Published: ${this.date}</h4>
            <hr>
            ${(this.comments.length == 0) ? `<p>"No comments"</p>` : this.comments.map(item => item.renderComment()).join("")}
        </div>
        `
    }
}