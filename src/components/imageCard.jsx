function ImageCard(props) {
  /* bg-rose-800 */
    const imgClasses = "rounded-br-lg rounded-tl-lg w-[97%] mx-auto shadow-black shadow-sm " + props.imgClasses;
    const containerClasses = "max-w-2xl mx-auto bg-emerald-400 shadow-emerald-700 shadow-inner py-2 rounded-br-lg rounded-tl-lg " + props.containerClasses;
    return (
      <div className={containerClasses}>
        <img id={props.id || ""} src={props.src} alt={props.alt || "A garden."} className={imgClasses} />
      </div>
    );
  }

  export default ImageCard;