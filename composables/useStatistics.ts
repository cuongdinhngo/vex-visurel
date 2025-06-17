import { faker } from '@faker-js/faker';

const formatOption: Intl.DateTimeFormatOptions = {
   year: 'numeric',
   month: 'short'
}

export const useStatistics = () => {
  const currentDate = new Date();

  const monthlySales = () => {
    const salesData = [];
    for (let i = 11; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      salesData.push({
        month: date.toLocaleDateString('en-US', formatOption),
        amount: parseFloat(faker.commerce.price({ min: 1000, max: 10000, dec: 2 })),
      });
    }

    return salesData;
  }

  return {
    monthlySales,
  }
}