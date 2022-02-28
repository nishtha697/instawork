import userData from './data/users.json';

const user = (state = userData, action) => {
    switch (action.type) {
        case 'edit-user':
            const id = action.user._id
            state.map(u => {
                if (u._id === id) {
                    u.name = action.user.name;
                    u.email = action.user.email;
                    u.phone = action.user.phone;
                    u.role = action.user.role;
                }
            });
            return state
            break;

        case 'create-user':
            let user = {
                ...action.user,
                _id: (new Date()).getTime() + ''
            }
            return ([user, ...state]);
            break;

        case 'delete-user':
            return state.filter(user => user._id !== action.user._id);
            break;

        default:
            return (state);
    }
};

export default user;

