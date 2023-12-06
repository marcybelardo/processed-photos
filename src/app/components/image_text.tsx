import { MdCamera, MdOutlineCameraRoll } from 'react-icons/md';
import { FaStopwatch, FaCamera } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';
import { ReactNode } from 'react';

const title = "A Sample Title";
const text = "This is a sample of what the text on the page will look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function ImageText() {
    return(
        <div className="image-text-wrapper">
            <div className="image-info">
                <h3>{title}</h3>
                <ImageInfoLine icon={<MdCamera />} info="f/5.6" />
                <ImageInfoLine icon={<MdOutlineCameraRoll />} info="ISO 400" />
                <ImageInfoLine icon={<FaStopwatch />} info="1/200" />
                <ImageInfoLine icon={<TbRulerMeasure />} info="28mm" />
                <ImageInfoLine icon={<FaCamera />} info="Canon EOS R5" />
            </div>
            <div className="image-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

function ImageInfoLine({ icon, info } : { icon: ReactNode, info: string }) {
    return (<span>{icon} {info}</span>)
}