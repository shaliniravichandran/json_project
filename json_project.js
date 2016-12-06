var readline = require('readline');
var fs = require('fs');
var lineReader = readline.createInterface({
	input : fs.createReadStream('agriculture.csv'),
});
var array=[];
var header=[];
var row=0;
var r={};

lineReader.on('line',function(line){
	var data = line.split(',');
	if(row==0){
		header=line.split(',');
		row++;
		iucr=data.indexOf('IUCR');
		description = data.indexOf('Description');
		year = data.indexOf('Year');
		primarytype = data.indexOf('Primary Type');
		console.log(iucr+'=============='+description+"============="+year);
	}
	else{
	
		if(data[iucr] == 810 || data[iucr] == 820 ){
			//array.push(data[description],data[year],data[primarytype]);
			r={
				'Description':data[description],
				'Year':data[year],
				'Primary Type':data[primarytype]
			};

	
			fs.appendFile('crime.txt',JSON.stringify(r));

			}
		}
	

  
});