/* class Timer{
    constructor(count) {
        this.count = count;
        this.idInterval = null;
    }
    start() {
        this.idInterval=setInterval(function () {
            if (this.count > 0) {
            this.count--;
            } else {
                this.stop()   //clearInterval(this.iDinterval)
            }
            console.log(this)
        }, 1000)
        
    }

    stop() {
        console.log(this)
        clearInterval(this.idInterval)
    }
} */


//////////////////////старый метод решения..
/* class Timer{
    constructor(count) {
        this.count = count;
        this.idInterval = null;
    }
    start() {
        const that = this;

        this.idInterval=setInterval(function () {
            if (that.count > 0) {
            that.count--;
            } else {
                that.stop()   
            }
            console.log(that.count)
        }, 1000)
        
    }

    stop() {
        console.log(this)
        clearInterval(this.idInterval)
    }
} */
/////////////////стрелочная функция сохраняет контекст
class Timer{
    constructor(count, onUpdateCount, onStop) {
        this.count = count;
        this.idInterval = null;
        this.onUpdateCount = onUpdateCount;
        this.onStop = onStop;
    }
    start() {
        this.idInterval=setInterval(()=> {
            if (this.count > 0) {
                this.count--;
                this.onUpdateCount(this.count)
            } else {
                this.stop() 
            }
            console.log(this.count)
        }, 1000)
        
    }

    stop() {
        console.log(this);
        clearInterval(this.idInterval);
        this.onStop(this.count)
    }
}