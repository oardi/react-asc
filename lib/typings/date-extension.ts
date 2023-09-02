import type { ConfigType, ManipulateType, OpUnitType } from 'dayjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

declare global {
	interface Date {
		isAfter(date: ConfigType, unit?: OpUnitType): boolean;
		isBefore(date: ConfigType, unit?: OpUnitType): boolean;
		format(template?: string): string;
		isValid(): boolean;
		add(value: number, unit?: ManipulateType): Date;
		subtract(value: number, unit?: ManipulateType): Date;
		firstDayOfMonth(): Date;
		lastDayOfMonth(): Date;
	}
}

Date.prototype.isAfter = function (date: dayjs.ConfigType, unit?: dayjs.OpUnitType): boolean {
	return dayjs(this).isAfter(date, unit);
};

Date.prototype.isBefore = function (date: dayjs.ConfigType, unit?: dayjs.OpUnitType): boolean {
	return dayjs(this).isBefore(date, unit);
};

Date.prototype.format = function (template?: string): string {
	return dayjs(this).format(template);
};

Date.prototype.isValid = function (): boolean {
	return dayjs(this).isValid();
};

Date.prototype.add = function (value: number, unit?: ManipulateType): Date {
	return dayjs(this).add(value, unit).toDate();
};

Date.prototype.subtract = function (value: number, unit?: ManipulateType): Date {
	return dayjs(this).subtract(value, unit).toDate();
};

Date.prototype.firstDayOfMonth = function (): Date {
	return dayjs(this).startOf('month').toDate();
};

Date.prototype.lastDayOfMonth = function (): Date {
	return dayjs(this).endOf('month').toDate();
};
