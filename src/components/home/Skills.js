import React from 'react'
import Heading from '../Heading'

const Skills = () => {
    return (
        <>
            <div className="row home vh-100 text-dark " style={{ fontFamily: 'serif' }}>
                <div style={{ textAlign: 'center', fontFamily: 'serif' }}>
                    <Heading name="SKILLS" />
                </div>
                <p style={{ textAlign: 'center', fontFamily: 'serif' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus beatae, esse iusto doloribus suscipit sapiente ducimus expedita maiores error.</p>
                <div className="col-4">
                    <h5><strong style={{ fontFamily: 'serif', color: "blueviolet" }} >Design</strong></h5>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: '35%' }}>35%</div>
                    </div>
                    <br /><br />
                    <h5><strong style={{ fontFamily: 'serif', color: "blueviolet" }} >HTML</strong></h5>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: ' 95%' }}>95%</div>
                    </div>
                    <br /><br />
                    <h5><strong style={{ fontFamily: 'serif', color: "blueviolet" }} >CSS</strong></h5>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: ' 80%' }}>80%</div>
                    </div>
                </div>
                <div className="col-4">
                    <h5><strong style={{ fontFamily: 'serif', color: "blueviolet" }} >Bootstrap</strong></h5>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: ' 80%' }}>80%</div>
                    </div>
                    <br /><br />
                    <h5><strong style={{ fontFamily: 'serif', color: "blueviolet" }} >Javascript</strong></h5>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: ' 75%' }}>75%</div>
                    </div>
                </div>





            </div>

        </>
    )
}

export default Skills