import { faker } from "@faker-js/faker";
import { color } from "chart.js/helpers";

export interface Mail {
  id: number;
  category: Category;
  labels: Label;
  isRead: boolean;
  isStared: number;
  sender: Sender;
  subject: string;
  body: string;
  timestamp: Date;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
}

export interface Label {
  id: string;
  title: string;
  icon: string;
}

export interface Sender {
  id: string;
  avatar: string;
  name: string;
  email: string;
}

const LABELS = [
  { id: 'work', title: 'Work', icon: 'mdi-briefcase', color: 'blue' },
  { id: 'personal', title: 'Personal', icon: 'mdi-account', color: 'green' },
  { id: 'important', title: 'Important', icon: 'mdi-star', color: 'red' },
  { id: 'social', title: 'Social', icon: 'mdi-account-group-outline', color: 'purple' },
];

const CATEGORIES = [
  { id: 'inbox', title: 'Inbox', icon: 'mdi-inbox' },
  { id: 'sent', title: 'Sent', icon: 'mdi-send' },
  { id: 'drafts', title: 'Drafts', icon: 'mdi-file-document-outline' },
  { id: 'spam', title: 'Spam', icon: 'mdi-alert-octagon-outline' },
];

const SENDERS = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  avatar: faker.image.avatar(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

const mails = ref(
  Array.from({ length: 50 }, (_,index) => {
    const category = CATEGORIES[faker.number.int({ min: 0, max: CATEGORIES.length - 1 })];
    const label = ['sent', 'drafts'].includes(category.id) ? '' : LABELS[faker.number.int({ min: 0, max: LABELS.length - 1 })];
    const isRead = ['sent', 'drafts'].includes(category.id) ? true : faker.datatype.boolean();
    const isStared = ['sent', 'drafts'].includes(category.id) ? false : faker.datatype.boolean();

    return {
      id: index + 1,
      category: category,
      label: label,
      isRead: isRead,
      isStared: isStared,
      sender: SENDERS[faker.number.int({ min: 0, max: SENDERS.length - 1 })],
      subject: faker.lorem.sentence({ min: 3, max: 10 }),
      body: faker.lorem.paragraph(),
      timestamp: faker.date.past({ years: 1, refDate: new Date() }),
    }
  })
);

export const useMails = () => {

  const getMailsViaCategory = (categoryId: string) => {
    return mails.value.filter(mail => mail.category.id === categoryId);
  }

  const getMailsViaLabel = (labelId: string) => {
    return mails.value.filter(mail => mail.label.id === labelId);
  }

  const getMailById = (id: number) => {
    return mails.value.find(mail => mail.id === id);
  }

  const markAsRead = (id: number) => {
    const mail = getMailById(id);
    if (mail) {
      mail.isRead = true;
    }
  }

  return {
    mails,
    getMailsViaCategory,
    getMailsViaLabel,
    getMailById,
    markAsRead,
    CATEGORIES,
    LABELS,
  };
}