class store{
	constructor(){
		this.getAll = require('./data.json');
	}
	all(){
		return this.getAll;
	}
	findTitle(findStr){
		return this.getAll.filter(a => {
			a.title === findStr;
		})
	}
}
module.exports = store;