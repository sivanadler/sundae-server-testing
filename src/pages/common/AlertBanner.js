import { Alert } from 'react-bootstrap'

function AlertBanner({message, variant}){

    const alertMessage = message || 'An unexpected error occurred. Please try again later.'
    const alertVariant = variant || 'danger'

    return (
        <Alert variant={alertVariant}>
            {alertMessage}
        </Alert>
    )
}

export default AlertBanner