export const findByHour = (rows = [], hour) => rows.find(item => item.id === hour);  

export const uniq = (arr = []) => arr.filter((item, index, self) => index === self.findIndex(t => t.hour === item.hour));

export const toNumHour = hour => Number(hour.slice(0,2))