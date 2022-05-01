import React from 'react';

function LightModal(props){
    return (
        <>
            <div className={`oc-modal-gallery-backdrop ${props.showNotShow ? 'active' : ''}`}></div>
            <div className={`oc-gallery-modal ${props.showNotShow ? 'active' : ''}`}>
                <div className="oc-gallery-modal__wrapper">
                    <img src={props.src}alt="" className="oc-gallery-img" />
                </div>
                <button className="button modal-close" onClick={props.onClose}><img src="./images/icons/close-circle-outline.svg" alt="" /></button>
            </div>
        </>
    );
}

export default LightModal;