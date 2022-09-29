import ImageCard from "./imageCard"


function Gallery(props) {
    return (
        <div>
            <div className="relative">
                <ImageCard containerClasses="absolute z-1" />
                <div className="invisible absolute z-2"></div>
            </div>
        </div>
    );
}