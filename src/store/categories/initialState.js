const state = [
    {
        id: 1,
        name: 'Личная',
        color: 'primary'
    },
    {
        id: 2,
        name: 'Работа',
        color: 'secondary'
    },
    {
        id: 3,
        name: 'Семейное',
        color: 'success'
    }
];

export default JSON.parse(localStorage.getItem('categories')) || state;