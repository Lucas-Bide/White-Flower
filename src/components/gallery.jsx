import ImageCard from "./imageCard";
import { useState } from "react";

import i1 from "../images/01.png";
import i2 from "../images/02.png";
import i3 from "../images/03.png";
import i4 from "../images/04.png";
import i5 from "../images/05.png";
import i6 from "../images/06.png";
import i7 from "../images/07.png";
import i8 from "../images/08.png";
import i9 from "../images/09.png";
import i10 from "../images/10.png";
import i11 from "../images/11.png";
import i12 from "../images/12.png";
import i13 from "../images/13.png";
import i14 from "../images/14.png";
import i15 from "../images/15.png";
import i16 from "../images/16.png";
import i17 from "../images/17.png";
import i18 from "../images/18.png";
import i19 from "../images/19.png";
import i20 from "../images/20.png";
import i21 from "../images/21.png";
import i22 from "../images/22.png";
import i23 from "../images/23.png";
import i24 from "../images/24.png";
import i25 from "../images/25.png";
import i26 from "../images/26.png";
import i27 from "../images/27.png";
import i28 from "../images/28.png";
import i29 from "../images/29.png";
import i30 from "../images/30.png";

const galleryImages = [
    i1, i2, i3, i4, i5, i6, i7, i8, i9,
    i10, i11, i12, i13, i14, i15, i16, i17, i18, i19,
    i20, i21, i22, i23, i24, i25, i26, i27, i28, i29,
    i30
];

function GalleryBtn(props) {
    let pathClasses = "fill-teal-200 group-active:fill-teal-400 ";
    let svgClasses = "h-[60px] ";
    if (props.disabled) {
        pathClasses = "fill-teal-400 "; 
    }
    
    if (props.dir === 1) {
       svgClasses +=  "rotate-180";
    }

    return (
        <button disabled={props.disabled} onClick={props.onClick} 
            className="group transition-all bg-emerald-400 shadow-teal-800 shadow-inner rounded-xl 
            w-[80px] flex justify-center disabled:bg-emerald-600 disabled:shadow-black active:bg-emerald-600 active:shadow-black active:shadow-inner"
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
            (direction > 0 && index === galleryImages.length - 1)) {
            return index;
        }

        return index + 1 * direction;
    }

    return (
        <div className="mt-4 relative min-h-[320px] mb-14">
           
            <ImageCard containerClasses="" src={galleryImages[index]} />

            <div className="flex justify-around mt-6 w-full xs:max-w-md xs:mx-auto absolute bottom-0 z-10 xs:relative xs:bottom-auto">
                <GalleryBtn disabled={index===0} onClick={() => setIndex(handleClick(-1))} dir={-1} />
                <GalleryBtn disabled={index===galleryImages.length-1} onClick={() => setIndex(handleClick(1))} dir={1} />
            </div>

            <span className="absolute z-0 bottom-4 w-full text-center">
                {index + 1} / {galleryImages.length}
            </span>
        </div>
    );
}

export default Gallery;