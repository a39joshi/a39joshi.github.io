import "../styles/main.css";
import YellowFlower from "../images/yellow-flower.png"

function Timeline() {

    const AppleDescription=`
    Robots and htis and that and more stuff.  blah blah blah this is what i do
    with robots and i move them around and more stuff and blah blah i love flowers.
    `;
    const TeslaDescription="Cars";
    const UberDescription="EVs";

    return (
        <div class="Timeline">
            <div class="container left-container">
                <img src={YellowFlower}></img>
                <div class="text-box right-text">
                    <h2>Apple Inc.</h2>
                    <small>2021 - Current</small>
                    <p>{AppleDescription}</p>
                </div>
            </div>
            <div class="container right-container">
                <img src={YellowFlower}></img>
                <div class="text-box left-text">
                    <h2>Tesla Inc.</h2>
                    <small>2020</small>
                    <p>{TeslaDescription}</p>
                </div>
            </div>
            <div class="container left-container">
                <img src={YellowFlower}></img>
                <div class="text-box right-text">
                    <h2>Uber Technologies Inc.</h2>
                    <small>2019</small>
                    <p>{UberDescription}</p>
                </div>
            </div>
        </div>
        

    ); 
};

export default Timeline;