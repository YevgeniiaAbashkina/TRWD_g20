const  fs = require("fs");
const path = require("path")

class Course{
    constructor(title, price, img){
        this.title=title;
        this.price=price;
        this.img = img;
        this.id = Date.now()
    }
    async save(){
        const courses = await Course.getAll();
        console.log(this)
        courses.push(this);
        return new Promise((resolve, rejects)=>{
            fs.writeFile(
                path.join(__dirname, "..", "data", "courses.json"),
                JSON.stringify(courses),
                err=>{
                    if(err){
                        rejects(err)
                    }else{
                        resolve()
                    }
                }
            )
        })
    }

    static getAll(){
        return new Promise((resolve, rejects)=>{
            fs.readFile(
                path.join(__dirname, "..", "data", "courses.json"),
                "utf-8",
                (err, data)=>{
                    if(err){
                        rejects(err)
                    }
                    else{
                        resolve(JSON.parse(data))
                    }
                }
            )
        })
    }
}

module.exports= Course;