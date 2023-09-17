export const sample_sites = [
    {
        id: '1',
        name: 'Магазин',
        prepareTime: '5',
        price: '6',
        favorite: false,
        origins: ['bg'],
        stars: 4.5,
        imageUrl: '/sites/site-1.jpg',
        tags: ['магазин', 'информация']
    },
    {
        id: '2',
        name: 'Визитка',
        prepareTime: '3',
        price: '4',
        favorite: false,
        origins: ['bg', 'eng', 'gr'],
        stars: 4,
        imageUrl: '/sites/site-2.jpg',
        tags: ['информация', 'визитка']
    },
    {
        id: '3',
        name: 'CV',
        prepareTime: '2',
        price: '5',
        favorite: false,
        origins: ['eng'],
        stars: 3,
        imageUrl: '/sites/site-3.jpg',
        tags: ['резюме', 'cv']
    },
    {
        id: '4',
        name: 'резюме',
        prepareTime: '2',
        price: '5',
        favorite: false,
        origins: ['eng'],
        stars: 3,
        imageUrl: '/sites/site-4.jpg',
        tags: ['резюме', 'cv']
    },
    {
        id: '5',
        name: 'Блог',
        prepareTime: '2',
        price: '5',
        favorite: false,
        origins: ['bg', 'eng'],
        stars: 3,
        imageUrl: '/sites/site-5.jpg',
        tags: ['природа']
    },
    {
        id: '6',
        name: 'Рецепти',
        prepareTime: '3',
        price: '5',
        favorite: false,
        origins: ['bg', 'eng'],
        stars: 3,
        imageUrl: '/sites/site-6.jpg',
        tags: ['рецепти']
    },
];

export const sample_tags = [
    { name: 'всички', count: 6 },
    { name: 'cv', count: 2 },
    { name: 'резюме', count: 2 },
    { name: 'природа', count: 1 },
    { name: 'рецепти', count: 1 },
    { name: 'магазин', count: 1 },
    { name: 'информация', count: 1 },
    { name: 'визитка', count: 1 },
];

export const sample_users = [
    {
        id: 1,
        name: 'Нина Николова',
        email: 'ninagbs@abv.bg',
        password: '12345',
        address: 'Лозен',
        isAdmin: true,
    },
    {
        id: 2,
        name: 'Васил Василев',
        email: 'vavasilev@abv.bg',
        password: '12345',
        address: 'София',
        isAdmin: false,
    },
];