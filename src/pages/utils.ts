export const sleep = (delay: number) => new Promise((res) => setTimeout(res, delay));
export const convert = (s: string) => s.split(', ')[0].split('/').join('.');
export const isValidDate = (s: string) => !Number.isNaN(new Date(s).valueOf());
export const isValidFormat = (s: string) => {
  const format = /\d{2}\.\d{2}\.\d{4}/;
  return format.test(s);
};
