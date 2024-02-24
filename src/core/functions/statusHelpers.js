export const getStatusColor = (code) => {
    switch (code) {
        case 1:
            return 'green.main';
        case 2:
            return 'secondary.main';
        case 3:
            return 'red.main';
        default:
            return 'green.main';
    }
};
