import { faker } from '@faker-js/faker';

export interface Account {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  avatar?: string;
  address?: string;
  phone?: string;
  note?: string;
  skills?: string[];
}

const skills = ['PM', 'BE', 'FE', 'BA', 'SA', 'TA', 'HR'];

const accounts: Account[] = reactive(Array.from({ length: 50 }, (_, index) => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = `${firstName} ${lastName}`;

  return {
    id: index + 1,
    firstName: firstName,
    lastName: lastName,
    name: name,
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    phone: faker.phone.number(),
    note: faker.lorem.sentence(),
    skills: faker.helpers.arrayElements(skills, { min: 1, max: 3 })
  }
}));

export const useAccounts = () => {
  const addAccount = (account: Account) => {
    if (!account.id) {
      account.id = accounts.length + 1; // Assign a new ID
    }
    account.avatar = account.avatar || faker.image.avatar();
    account.name = `${account.firstName} ${account.lastName}`;
    account.skills = account.skills || faker.helpers.arrayElements(skills, { min: 1, max: 3 });

    accounts.unshift(account);
  }

  const deleteAccount = (id: number) => {
    const index = accounts.findIndex(account => account.id === id);
    if (index !== -1) {
      accounts.splice(index, 1);
    }
  }

  const updateAccount = (updatedAccount: Partial<Account>) => {
    const index = accounts.findIndex(account => account.id === updatedAccount.id);
    if (index !== -1) {
      const account = accounts[index];
      accounts[index] = {
        ...account,
        ...updatedAccount,
        name: `${updatedAccount.firstName || account.firstName} ${updatedAccount.lastName || account.lastName}`,
        avatar: updatedAccount.avatar || account.avatar,
        skills: updatedAccount.skills || account.skills
      };
    }
  }

  const searchAccounts = (query: string) => {
    if (!query) return accounts;
    const lowerQuery = query.toLowerCase();
    accounts.filter(account => {
      return account.name.toLowerCase().includes(lowerQuery) ||
      account.email.toLowerCase().includes(lowerQuery)
    });
  }

  return {
    accounts,
    addAccount,
    deleteAccount,
    updateAccount,
    searchAccounts
  }
}