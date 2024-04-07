import "../styles/main.css";
import YellowFlower from "../images/yellow-flower-continuous.png"
import Leaf3 from "../images/leafs3.png"

function Timeline() {

    const AppleDescription=`
    Robots and htis and that and more stuff.  blah blah blah this is what i do
    with robots and i move them around and more stuff and blah blah i love flowers.
    `;

    const TeslaDescription=`
    Robots and htis and that and more stuff.  blah blah blah this is what i do
    with robots and i move them around and more stuff and blah blah i love flowers.
    `;

    const UberDescription=`
    Robots and htis and that and more stuff.  blah blah blah this is what i do
    with robots and i move them around and more stuff and blah blah i love flowers.
    `;

    return (
        <body>
            <div className="timeline">
                <div className="image-container">
                    <img src={Leaf3} className="left-leaf1"></img>
                    <img src={Leaf3} className="right-leaf1"></img>
                    {/* <img src={Leaf1} className="left-leaf2"></img> */}
                    {/* <img src={Leaf3} className="left-leaf3"></img> */}
                    {/* <img src={Leaf2} className="right-leaf"></img> */}
                    {/* <img src={Leaf2} className="right-leaf"></img> */}

                </div>
                <div className="container left-container">
                    <img src={YellowFlower}></img>
                    <div className="text-box right-text">
                        <h2>Apple Inc.</h2>
                        <small>2021 - Current</small>
                        <p>{AppleDescription}</p>
                        <span class='left-container-arrow'></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src={YellowFlower}></img>
                    <div className="text-box left-text">
                        <h2>Tesla Inc.</h2>
                        <small>2020</small>
                        <p>{TeslaDescription}</p>
                        <span class='right-container-arrow'></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img src={YellowFlower}></img>
                    <div className="text-box right-text">
                        <h2>Uber Technologies Inc.</h2>
                        <small>2019</small>
                        <p>{UberDescription}</p>
                        <span class='left-container-arrow'></span>
                    </div>
                </div>
            </div>
        </body>

    ); 
};

export default Timeline;