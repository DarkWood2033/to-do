const state = [
    {
        id: 1,
        text: 'Купить молоко',
        complited: true,
        category_id: 1
    },
    {
        id: 2,
        text: 'Сделать уборку',
        complited: false, 
        category_id: 2
    },
    {
        id: 3,
        text: 'Сходить на тренировку',
        complited: true, 
        category_id: 1
    },
    {
        id: 4,
        text: 'Прочитать книгу', 
        category_id: 3
    }
];

export default JSON.parse(localStorage.getItem('todos')) || state;