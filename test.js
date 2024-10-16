const fs = require('fs');
const path = require('path');

class files{
    file = null;
    type = null;
    constructor(file){
        this.file = file;
        this.type = path.extname(file);
        return this.read(this.type);
    }

    read(type){
        if(type == '.csv'){
            return console.log('thhis type file '+type);
            
        }else if(type == '.xltm'){
            return console.log('this i dont not type '+type);
        }else if(type == '.xlsx'){
            return console.log('this i dont not type '+type);
        }else if(type == '.xltx'){
            return console.log('this i dont not type '+type);
        }else if(type == '.xlsm'){
            return console.log('this i dont not type '+type);
        }else{
            return console.log('this i dont not type '+type);
        }
        //return this.record(this.file,this.type);
    }

    record(file){
    }
}

var b = new files('./otuput/1.csv');
