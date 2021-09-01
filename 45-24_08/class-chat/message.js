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
        <div   class="message" data-message="${this.id}">
            <h4>${this.title}</h4>
            
            <p>Published: ${this.date}</p>
        </div>
        <input type="text" name="message" id="userNewMessage">
        <button id="sendBtn" data-newmessage="${this.id}">send new message</button>
        `
    }

  /*   renderNewMessage() {
        return `
        <div  class="message">
            <h5>${}<h5>
            <p>Published: ${this.date}</p>
        </div>
        `
    } */

    renderFullInfo() {
        return `
        <div class="fullInfo">
            <h3>${this.title}</h3>
            <p>${this.text}</p>
            <h5> Published: ${this.date}</h5>
            <hr>
            ${(this.comments.length == 0) ? `<p>"No comments"</p>` : this.comments.map(item => item.renderComment()).join("")}
        </div>
        `
    }
}