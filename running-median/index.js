const median = require('./median');
const fs = require('fs')
const filename = process.argv[2];
const inputFolderName = "./input/";
const medianRun = median();

if (filename === undefined) {
	console.log("file name can't be empty")
} else {
	fs.readFile(filename, 'utf8', function(err, data) {
		if (err) throw err;
		let dataArray = data.split("\n");
		for(var i =1 ; i < dataArray.length; i++){
			const val = parseInt(dataArray[i])
			if (isNaN(val)){
				return
			}else{
				medianRun.addValue(val);
				const medianValue = medianRun.getValue();
				console.log(medianValue.toFixed(1))
			}
		}
	})
}

