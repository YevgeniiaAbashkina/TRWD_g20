class Comment{
    constructor(userId, messageId, text, date) {
        this.id = Comment.id++;
        this.userId = userId;
        this.messageId = messageId;
        this.text = text;
        this.date = date;
    }
    static id = 0;

    renderComment() {
        return `
        <div>
            <h5>${this.text}</h5>
            <p>${this.date}, comment by ${findUserById(this.userId).name}</p>
        </div>    
        `
    }
}