function Paragraph(props) {
    const classes = 'max-w-lg mx-auto text-center my-14 first-letter:ml-4 ' + props.classes;
    return (
      <p className={classes}>
        {props.text}
      </p>
    );
}

export default Paragraph;