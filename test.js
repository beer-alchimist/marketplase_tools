const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const code = 'UTF8';
class files{
    file = null;
    type = null;
    str_m = []; 
    constructor(file){
        this.file = file;
        this.type = path.extname(file);
        return this.read(this.type);
    }

    async read(type){
        if(type == '.csv'){
            var lines = fs.readFileSync(this.file, code,(err, data)=>{
            });
            var result = [{}];
            //await console.log(lines);
            /*await lines.forEach(row=>{
                console.log(row);
                console.log('-------------')
            });*/
            //return console.log('thhis type file '+type);
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

var b = new files('1.csv');
