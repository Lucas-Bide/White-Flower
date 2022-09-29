import Paragraph from "./paragraph";

function StarterParagraph(props) {
    return (
      <Paragraph text={props.text} classes='first-letter:text-3xl mt-6' />
    );
}

export default StarterParagraph;