import React from "react";

interface ErrorMessageProps {
    error: string
}

// const ErrorMessage = ({error}) => {
//  return ()
// }

// export default ErrorMessage

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className="text-center text-red-600">{error}</p>
    )
}