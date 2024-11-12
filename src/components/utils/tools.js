import { toast } from 'react-toastify';

export const showToast = (type, msg) => {
    const position = toast.POSITION?.BOTTOM_RIGHT || 'bottom-right'; // Use fallback if undefined

    switch (type) {
        case 'SUCCESS':
            toast.success(msg, {
                position: position,
            });
            break;
        case 'ERROR':
            toast.error(msg, {
                position: position,
            });
            break;
        default:
            return false;
    }
};
