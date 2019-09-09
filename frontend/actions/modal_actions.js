export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = contentName => ({
    type: OPEN_MODAL,
    contentName
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});