export const dashboardImgPath = (img: string) => {
  return `${useRuntimeConfig().app.baseURL}/images/${img}`;
}

export const formatNumber = (num: number, decimals: number = 1): string => {
  if (num === 0) return '0';
  
  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';
  
  const suffixes = [
    { value: 1e12, suffix: 'T' }, // Trillion
    { value: 1e9, suffix: 'B' },  // Billion
    { value: 1e6, suffix: 'M' },  // Million
    { value: 1e3, suffix: 'k' }   // Thousand
  ];
  
  for (const { value, suffix } of suffixes) {
    if (absNum >= value) {
      const formatted = (absNum / value).toFixed(decimals);
      // Remove trailing zeros after decimal point
      const cleanFormatted = parseFloat(formatted).toString();
      return `${sign}${cleanFormatted}${suffix}`;
    }
  }
  
  // For numbers less than 1000, return as is
  return num.toString();
};

export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}