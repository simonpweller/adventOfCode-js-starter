import fs from 'fs';

function readLines(fileName) {
	const input = fs.readFileSync(fileName).toString();
	return input.includes('\r\n') ? input.split('\r\n') : input.split('\n');
}

export default readLines;
