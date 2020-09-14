const state = [
    {
        id: 1,
        text: 'Купить молоко',
        complited: true
    },
    {
        id: 2,
        text: 'Сделать уборку',
        complited: false
    },
    {
        id: 3,
        text: 'Сходить на тренировку',
        complited: true
    },
    {
        id: 4,
        text: 'Прочитать книгу',
        complited: false
    }
];

export default JSON.parse(localStorage.getItem('todos')) || state;