import { useCallback } from 'react';
import { useSnackbar as useNotistackSnackbar } from 'notistack';


type SnackbarProps = {
    variant: String;
    text: String;
    open: boolean;
};

const SnackMessages = ({ variant, text, open }: SnackbarProps) => {
    const { enqueueSnackbar } = useNotistackSnackbar();

    const handleClick = () => {
        if (open && variant === "success") {
            showSuccessSnackbar();
        } else if (open && variant === "error") {
            showErrorSnackbar();
        } else if (open && variant === "info") {
            showInfoSnackbar();
        }
        return <></>;
    }

    const showSuccessSnackbar = useCallback(() => {
        enqueueSnackbar(text, {variant: "success"});
        },
        [enqueueSnackbar, text]
    );

    const showInfoSnackbar = useCallback(() => {
        enqueueSnackbar(text, {variant: "info"});
        },
        [enqueueSnackbar, text]
    );

    const showErrorSnackbar = useCallback(() => {
        enqueueSnackbar(text, {variant: "error"});
    },
    [enqueueSnackbar, text]
    );

    handleClick();
    return <></>;
}

export default SnackMessages;
