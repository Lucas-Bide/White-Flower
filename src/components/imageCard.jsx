function ImageCard(props) {
  /* bg-rose-800 */
    const imgClasses = "rounded-br-lg rounded-tl-lg w-11/12 mx-auto shadow-red-600 shadow-md " + props.imgClasses;
    const containerClasses = "bg-rose-800 shadow-red-400 shadow-sm py-3 rounded-br-lg rounded-tl-lg " + props.containerClasses;
    return (
      <div className={containerClasses}>
        <img id={props.id || ""} src={props.src} alt={props.alt || "A garden."} className={imgClasses} />
      </div>
    );
  }

  export default ImageCard;