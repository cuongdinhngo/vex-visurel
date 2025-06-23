import { fa, faker } from "@faker-js/faker";

export interface Attachment {
  url: string;
  isCover: boolean;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  comments?: string[];
  status: string;
  assignees?: string[];
  labels?: string[];
  attachments?: Attachment[];
  createdAt?: string;
}

export const LABELS = [
  { id: 'bug', name: 'Bug', color: 'red' },
  { id: 'feature', name: 'Feature', color: 'blue' },
  { id: 'enhancement', name: 'Enhancement', color: 'green' }
];

export const BOARDS = [
  {
    id: 'todo', name: 'To Do',
  },
  {
    id: 'in-progress', name: 'In Progress',
  },
  {
    id: 'done', name: 'Done',
  }
];

export const ASSIGNEES = Array.from({ length: 10 }, (_, i) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  avatar: faker.image.avatar()
}));

const columns = reactive([
  {
    id: 'todo',
    name: 'To Do',
    tasks: [
      {
        id: faker.string.uuid(),
        title: 'Task 1',
        description: 'Description for task 1',
        comments: [
          {
            id: faker.string.uuid(),
            content: 'This is a comment for task 1',
            authorId: ASSIGNEES[0].avatar,
            createdAt: faker.date.past().toISOString()
          },
          {
            id: faker.string.uuid(),
            content: 'Another comment for task 1',
            authorId: ASSIGNEES[1].avatar,
            createdAt: faker.date.past().toISOString()
          }
        ],
        status: 'todo',
        labels: ['bug', 'feature'],
        assignees: [
          {
            id: ASSIGNEES[0].id,
            name: ASSIGNEES[0].name,
            avatar: ASSIGNEES[0].avatar
          },
          {
            id: ASSIGNEES[1].id,
            name: ASSIGNEES[1].name,
            avatar: ASSIGNEES[1].avatar
          }
        ],
        attachments: [
          {
            url: `https://picsum.photos/id/${ faker.number.int({ min: 1, max: 500 }) }/300/200`,
            isCover: true
          },
          {
            url: `https://picsum.photos/id/${ faker.number.int({ min: 1, max: 500 }) }/300/200`,
            isCover: false
          }
        ]
      },
      {
        id: faker.string.uuid(),
        title: 'Task 2',
        description: 'Description for task 2',
        comments: [
          {
            id: faker.string.uuid(),
            content: 'This is a comment for task 2',
            authorId: ASSIGNEES[1].avatar,
            createdAt: faker.date.past().toISOString()
          }
        ],
        status: 'todo',
        labels: ['feature'],
        assignees: [],
        attachments: []
      },
      {
        id: faker.string.uuid(),
        title: 'Task 3',
        description: 'Description for task 3',
        comments: [],
        status: 'todo',
        labels: ['enhancement', 'bug'],
        assignees: [{
          id: ASSIGNEES[2].id,
          name: ASSIGNEES[2].name,
          avatar: ASSIGNEES[2].avatar
        }],
        attachments: []
      },
      {
        id: faker.string.uuid(),
        title: 'Task 14',
        description: 'Description for task 14',
        comments: [
          {
            id: faker.string.uuid(),
            content: 'This is a comment for task 14',
            authorId: ASSIGNEES[2].avatar,
            createdAt: faker.date.past().toISOString()
          },
          {
            id: faker.string.uuid(),
            content: 'Another comment for task 14',
            authorId: ASSIGNEES[3].avatar,
            createdAt: faker.date.past().toISOString()
          },
          {
            id: faker.string.uuid(),
            content: 'Yet another comment for task 14',
            authorId: ASSIGNEES[4].avatar,
            createdAt: faker.date.past().toISOString()
          }
        ],
        status: 'todo',
        labels: ['bug'],
      }
    ]
  },
  {
    id: 'in-progress',
    name: 'In Progress',
    tasks: [
      {
        id: faker.string.uuid(),
        title: 'Task 4',
        description: 'Description for task 4',
        comments: [],
        status: 'in-progress',
        labels: ['bug'],
        assignees: [
          {
            id: ASSIGNEES[3].id,
            name: ASSIGNEES[3].name,
            avatar: ASSIGNEES[3].avatar
          }
        ],
        attachments: [],
        createdAt: faker.date.past().toISOString(),
      },
      {
        id: faker.string.uuid(),
        title: 'Task 5',
        description: 'Description for task 5',
        comments: [],
        status: 'in-progress',
        labels: ['feature', 'enhancement'],
        assignees: [
          {
            id: ASSIGNEES[4].id,
            name: ASSIGNEES[4].name,
            avatar: ASSIGNEES[4].avatar
          },
          {
            id: ASSIGNEES[5].id,
            name: ASSIGNEES[5].name,
            avatar: ASSIGNEES[5].avatar
          },
          {
            id: ASSIGNEES[6].id,
            name: ASSIGNEES[6].name,
            avatar: ASSIGNEES[6].avatar
          },
          {
            id: ASSIGNEES[7].id,
            name: ASSIGNEES[7].name,
            avatar: ASSIGNEES[7].avatar
          }
        ],
        createdAt: faker.date.past().toISOString(),
        attachments: [
          {
            url: `https://picsum.photos/id/${ faker.number.int({ min: 1, max: 500 }) }/300/200`,
            isCover: true
          },
          {
            url: `https://picsum.photos/id/${ faker.number.int({ min: 1, max: 500 }) }/300/200`,
            isCover: false
          }
        ]
      }
    ]
  },
  {
    id: 'done',
    name: 'Done',
    tasks: [
      {
        id: faker.string.uuid(),
        title: 'Task 6',
        description: 'Description for task 6',
        comments: [
          {
            id: faker.string.uuid(),
            content: 'This is a comment for task 6',
            authorId: ASSIGNEES[5].avatar,
            createdAt: faker.date.past().toISOString()
          }
        ],
        status: 'done',
        labels: ['enhancement'],
        assignees: [
          {
            id: ASSIGNEES[5].id,
            name: ASSIGNEES[5].name,
            avatar: ASSIGNEES[5].avatar
          }
        ],
        attachments: [],
        createdAt: faker.date.past().toISOString(),
      },
      {
        id: faker.string.uuid(),
        title: 'Task 7',
        description: 'Description for task 7',
        comments: [],
        status: 'done',
        labels: ['bug'],
        createdAt: faker.date.past().toISOString(),
      },
      {
        id: faker.string.uuid(),
        title: 'Task 8',
        description: 'Description for task 8',
        comments: [
          {
            id: faker.string.uuid(),
            content: 'This is a comment for task 8',
            authorId: ASSIGNEES[6].avatar,
            createdAt: faker.date.past().toISOString()
          }
        ],
        status: 'done',
        labels: ['feature'],
        assignees: [
          {
            id: ASSIGNEES[6].id,
            name: ASSIGNEES[6].name,
            avatar: ASSIGNEES[6].avatar
          }
        ],
        createdAt: faker.date.past().toISOString(),
        attachments: [
          {
            url: `https://picsum.photos/id/${ faker.number.int({ min: 1, max: 500 }) }/300/200`,
            isCover: true
          }
        ]
      }
    ]
  }
]);

export const useScrumboard = () => {
  const addColumn = (name: string) => {
    const newColumn = {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      tasks: []
    };
    columns.push(newColumn);
  }

  const mapStatus = (status: string) => {
    const column = columns.find(col => col.id === status);
    return column ? column.name : 'Unknown';
  }

  return {
    BOARDS,
    LABELS,
    ASSIGNEES,
    columns,
    addColumn,
    mapStatus
  }
}
