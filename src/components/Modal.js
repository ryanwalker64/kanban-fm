import "../modal.css"
import { useEffect } from "react"

export default function Modal(props) {
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeDown)
        return function cleanUpEventListener() {
            document.body.removeEventListener('keydown', closeOnEscapeDown)
        }
    }, [])


    if (!props.show) {
        return null
    }

    function closeOnEscapeDown(e) {
        if(e.charCode === 27 || e.keyCode === 27) {
            props.onClose()
        }
    }
    

    return (
        <div className='modal-overlay' onClick={props.onClose}>
            <div className='modal-container' onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}