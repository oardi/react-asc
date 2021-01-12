import { LoggerService } from '../services';

export default function useLogger() {
	// State and setters for debounced value
	console.warn('init useLogger');
	const logger = new LoggerService();
	return logger;
}
