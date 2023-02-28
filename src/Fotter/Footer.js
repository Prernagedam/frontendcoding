import React from 'react'



const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-warning ">
                <div className="row py-5 vh-50">
                    <div className="col-md-6 text-light fst-italic ">
                        <h5 style={{ fontFamily: 'serif', color: "brown" }}>Copyright@2022 Portfolio. All Rights Reserved.</h5>
                    </div>
                    <div className="col-md-6 text-light fst-italic ">
                        <h5 style={{ fontFamily: 'italic', color: "brown" }}>Designed By <span style={{ fontFamily: 'serif', color: "brown" }}>Prerna R.Gedam</span> </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer