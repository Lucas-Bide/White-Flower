function Paragraph(props) {
    const classes = 'my-14 first-letter:ml-4 ' + props.classes;
    return (
      <p className={classes}>
        {props.text}
      </p>
    );
}

export default Paragraph;