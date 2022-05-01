import React, {useState} from 'react';
import gallery from '../../gallery';
import LightModal from '../LightModal/LightModal';

let OPEN_GAL_SRC;

function Gallery(){

    const [visibleModal, setVisibleMobal] = useState(false);

    const openLightGallery = (e)=>{
        OPEN_GAL_SRC = e.target.src; 
        setVisibleMobal(true);
    }

    const closeModal = ()=>{
        setVisibleMobal(false);
    }

    const galleryImg = gallery.map(
        (curImg)=>{
            return <img key={curImg.id} src={`./images/gallery/${curImg.img}`} onClick={openLightGallery}/>
           
        }
    );

    return (
        <>        
        <LightModal showNotShow={visibleModal} src={OPEN_GAL_SRC} onClose={closeModal}/>
        <div className="oc-as oc-bg-gray">
            <div className="oc-as__container sg-big">
                <div className="container">
                    <h2 className="body-heading">Gallery</h2>
                    <div className="oc-gallery">
                        {galleryImg}
                    </div>
                    <div className="show-more-button">
                        <button className="button show-more">show more &darr;</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Gallery;