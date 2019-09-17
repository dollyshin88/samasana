export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (contentName, data={}) => {
    return({
    type: OPEN_MODAL,
    contentName,
    data,
})};

export const closeModal = () => ({
    type: CLOSE_MODAL,
});