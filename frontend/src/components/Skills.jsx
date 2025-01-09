import React, { useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";

function Skills() {

    const [showmore, setShowMore] = useState(false);

    return (
        <div>
            <h1 className='text-2xl text-center font-bold mt-20'>─═✧✧═─ 𝕊𝕜𝕚𝕝𝕝𝕤 ─═✧✧═─</h1>
            <div className='px-10 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 mt-20'>
                <div>
                    <div className='flex items-center justify-between'>
                        <h2>HTML</h2>
                        <h2>95%</h2>
                    </div>
                    <progress className="progress progress-info w-80 bg-white" value={95} max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>CSS</h2>
                        <h2>98%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="98" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>Javascript</h2>
                        <h2>90%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="90" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>React Js</h2>
                        <h2>85%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="85" max="100"></progress>
                    <br /><br />
                    <div className={showmore ? "block" : "hidden md:block"}>
                        <div className='flex items-center justify-between'>
                            <h2>Bootstrap</h2>
                            <h2>90%</h2>
                        </div>
                        <progress className="progress progress-info w-80  bg-white" value="90" max="100"></progress>
                        <br /><br />
                        <div className='flex items-center justify-between'>
                            <h2>Tailwind CSS</h2>
                            <h2>95%</h2>
                        </div>
                        <progress className="progress progress-info w-80  bg-white" value="95" max="100"></progress>
                        <br /><br />
                        <div className='flex items-center justify-between'>
                            <h2>Material UI</h2>
                            <h2>90%</h2>
                        </div>
                        <progress className="progress progress-info w-80  bg-white" value="90" max="100"></progress>
                    </div>

                </div>

                <h2 className={showmore ? "hidden": 'flex items-center justify-center text-blue-600 font-semibold md:hidden'} onClick={() => setShowMore(!showmore)}>See more skills <FaAngleDoubleRight className='ms-2' /></h2>

                <div className={showmore ? "block" : "hidden md:block"}>
                    <div className='flex items-center justify-between'>
                        <h2>Node Js</h2>
                        <h2>95%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="95" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>Express Js</h2>
                        <h2>95%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="95" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>MongoDB</h2>
                        <h2>80%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="80" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>MySql</h2>
                        <h2>80%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="80" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>Java</h2>
                        <h2>85%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="85" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>Python</h2>
                        <h2>40%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="40" max="100"></progress>
                    <br /><br />
                    <div className='flex items-center justify-between'>
                        <h2>DSA</h2>
                        <h2>75%</h2>
                    </div>
                    <progress className="progress progress-info w-80  bg-white" value="75" max="100"></progress>
                </div>
            </div>
        </div>
    )
}

export default Skills