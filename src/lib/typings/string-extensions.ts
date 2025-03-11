export {};

declare global {
	interface String {
		capitalize(): string;
	}
}

String.prototype.capitalize = function (): string {
	return this.charAt(0).toUpperCase() + this.slice(1);
};
