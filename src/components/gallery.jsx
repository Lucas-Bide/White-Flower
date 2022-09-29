import ImageCard from "./imageCard";
import { useState } from "react";

import i0 from "../images/gallery/00.jpg";
import i1 from "../images/gallery/01.jpg";
import i2 from "../images/gallery/02.jpg";
import i3 from "../images/gallery/03.jpg";
import i4 from "../images/gallery/04.jpg";
import i5 from "../images/gallery/05.jpg";
import i6 from "../images/gallery/06.png";
import i7 from "../images/gallery/07.jpg";
import i8 from "../images/gallery/08.jpg";
import i9 from "../images/gallery/09.jpg";
import i10 from "../images/gallery/10.jpg";
import i11 from "../images/gallery/11.jpg";
import i12 from "../images/gallery/12.jpg";
import i13 from "../images/gallery/13.jpg";
import i14 from "../images/gallery/14.jpg";
import i15 from "../images/gallery/15.jpg";
import i16 from "../images/gallery/16.jpg";
import i17 from "../images/gallery/17.jpg";
import i18 from "../images/gallery/18.jpg";
import i19 from "../images/gallery/19.jpg";
import i20 from "../images/gallery/20.jpg";
import i21 from "../images/gallery/21.jpg";
import i22 from "../images/gallery/22.jpg";
import i23 from "../images/gallery/23.jpg";
import i24 from "../images/gallery/24.jpg";
import i25 from "../images/gallery/25.jpg";
import i26 from "../images/gallery/26.jpg";
import i27 from "../images/gallery/27.jpg";
import i28 from "../images/gallery/28.jpg";
import i29 from "../images/gallery/29.jpg";
import i30 from "../images/gallery/30.jpg";

const galleryImages = [
    i0, i1, i2, i3, i4, i5, i6, i7, i8, i9,
    i10, i11, i12, i13, i14, i15, i16, i17, i18, i19,
    i20, i21, i22, i23, i24, i25, i26, i27, i28, i29,
    i30
];

function GalleryBtn(props) {
    let pathClasses = "fill-rose-200 group-active:fill-rose-400 ";
    let svgClasses = "h-[60px] ";
    if (props.disabled) {
        pathClasses = "fill-rose-400 "; 
    }
    
    if (props.dir === 1) {
       svgClasses +=  "rotate-180";
    }

    return (
        <button disabled={props.disabled} onClick={props.onClick} 
            className="group transition-all bg-rose-800 shadow shadow-red-400 rounded-xl 
            w-[80px] flex justify-center disabled:bg-rose-900 active:bg-rose-900"
        >
            <svg className={svgClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className={pathClasses} d="M21 8H11V5a1 1 0 0 0-1.707-.707l-7 7a1 1 0 0 0 0 1.414l7 7A1 1 0 0 0 11 19v-3h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" data-name="Left"/>
            </svg>
        </button>
    );
}

function Gallery(props) {
    let [index, setIndex] = useState(0);

    /* left: -1, right: 1 */
    function handleClick(direction) {
        if ((direction < 0 && index === 0) ||
            (direction > 0 && index === 30)) {
            return index;
        }

        return index + 1 * direction;
    }

    return (
        <div className="mt-4 relative min-h-[320px] mb-14">
           
            <ImageCard containerClasses="" src={galleryImages[index]} />

            <div className="flex justify-around mt-6 absolute w-full bottom-0 z-10">
                <GalleryBtn disabled={index===0} onClick={() => setIndex(handleClick(-1))} dir={-1} />
                <GalleryBtn disabled={index===30} onClick={() => setIndex(handleClick(1))} dir={1} />
            </div>

            <span className="absolute bottom-4 w-full text-center z-0">
                {index + 1} / 31
            </span>
        </div>
    );
}

export default Gallery;