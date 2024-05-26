export interface IData {
  data: string;
  day: number;
  hour: number;
  id: number;
  minute: number;
  month: number;
  quarter: number;
  week: number;
  year: number;
}
export interface DateType {
  year: number;
  month?: number;
  day?: number;
  week?: number;
}
export interface GraphProps {
  category: string;
  selectedTimeUnit?: string | number;
  date?: DateType;
  type?: string;
}
