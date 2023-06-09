import {formats, LoggerJs, winston} from '@potentii/logger-js';


/**
 * @type {LoggerJs}
 */
const Logger = new LoggerJs(
	'info',
	'app-didatico',
	[
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.label(),
				winston.format.timestamp(),
				formats.humanReadableFormat,
			)
		})
	]
);

export default Logger;