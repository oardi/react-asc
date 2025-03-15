class ClipboardService {
	copy(text: string): Promise<void> {
		return navigator.clipboard.writeText(text);
	}
}

export const clipboardService: ClipboardService = new ClipboardService();
