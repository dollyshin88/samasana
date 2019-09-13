export const initialsSelector = name => {
    const splitName = name.split(' ');
    if (splitName.length === 1) {
        return name.slice(0, 2);
    } else {
        return splitName[0][0] + splitName[1][0];
    }
};