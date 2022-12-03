import "../modal.css"
import { useEffect } from "react"
import ModalTaskPreview from "./ModalTaskPreview"
import ModalCreateTask from "./ModalCreateTask"

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
    
    let selectedModalContent
    if(props.type === 'taskModal') {
        selectedModalContent = <ModalTaskPreview data={props.content} activeBoard={props.activeBoard}/>
    } else if (props.type === 'createTaskModal') {
        selectedModalContent = <ModalCreateTask data={props.content} activeBoard={props.activeBoard}/>
    }
    

    return (
        <div className='modal-overlay' onClick={props.onClose}>
            <div className='modal-container' onClick={e => e.stopPropagation()}>
                 {selectedModalContent} 
            </div>
        </div>
    )
}