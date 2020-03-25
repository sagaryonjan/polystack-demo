
export const data = {
    error : {
        status: false,
        message: ''
    }
}

export const onClickShowError = ({setState}) => {
    setState('error', {
        status: true,
        message: 'Invalid Request !'
    }, true);
}

export const onClickHideError = ({setState}) => {
    setState('error', {
        status: false,
        message: 'Message Success'
    }, true);
}