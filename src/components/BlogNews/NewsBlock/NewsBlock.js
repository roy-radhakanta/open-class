import React from "react";


function NewsBlock(props){
    return(
                <div className="cl-3">
                        <div className="oc-card">
                            <div className="oc-card-img">
                                <img src="./images/inter-school-competetion.jpg" alt=""
                                    className="oc-card-img__self" />
                            </div>
                            <div className="oc-card-info">
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>
                            </div>
                        </div>
                    </div>
    );
}

export default NewsBlock;