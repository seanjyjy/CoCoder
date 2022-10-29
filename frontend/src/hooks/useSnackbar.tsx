import { useCallback } from 'react';
import { useSnackbar as useNotistackSnackbar } from 'notistack';


type SnackbarProps = {
    variant: String;
    text: String;
    onClose: () => void;
    open: boolean;
};

const SnackMessages = ({ variant, text, open, onClose }: SnackbarProps) => {
    const { enqueueSnackbar } = useNotistackSnackbar();

    const handleClick = () => {
        if (open && variant === "success") {
            showSuccessSnackbar();
        } else if (open && variant === "error") {
            showErrorSnackbar();
        }
        return <></>;
    }

    const showSuccessSnackbar = useCallback(() => {
        enqueueSnackbar(text, {variant: "success"});
        onClose();
        },
        [enqueueSnackbar, text, onClose]
    );

    const showErrorSnackbar = useCallback(() => {
        enqueueSnackbar(text, {variant: "error"});
        onClose();
    },
    [enqueueSnackbar, text, onClose]
    );

    return (
        handleClick()
    )
}

export default SnackMessages;
