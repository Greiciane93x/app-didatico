import logger from '../logger.mjs';


export default class Log{

	constructor(){}


	static install(app, options){
		app.config.globalProperties.$logger = logger;
	}

}