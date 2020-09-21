import { PluginFunc, ConfigType } from 'dayjs';

declare const plugin: PluginFunc;
export = plugin;

type calendarType = 'jalali' | 'gregory';

declare module 'dayjs' {
  export function calendar(calendarType: calendarType): Dayjs;
  
  interface Dayjs {
    calendar(calendarType: calendarType): Dayjs;

    isJalali(): boolean;
  }
}
