import toast from "react-hot-toast"

export default function Toast(message) {

    const toastSuccess = (message) => {
        toast.success(message)
    }

    const toastError = (message) => {
        toast.error(message)
    }
    return [ toastError, toastSuccess ]

}
