const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

class files{
    file = null;
    type = null;
    str_m = []; 
    constructor(file){
        this.file = file;
        this.type = path.extname(file);
        return this.read(this.type);
    }

    read(type){
        if(type == '.csv'){
            //console.log(this.file);
            var i = 0;
            var res = [];
            fs.createReadStream(this.file).pipe(csv()).on('data', (row) => {
                if(row !== null){
                    res[i]=row;
                    i++;
                }
            }) 
            .on('end', () => { 
            console.log('CSV file successfully processed'); 
            });
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

var b = new files('1.csv');
