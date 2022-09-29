function SectionDividerIcon(props) {
  const imgClasses = 'w-20 ' + props.imgClasses;
  return (
    <figure className='flex justify-center'>
      <img className={imgClasses} src={props.src} alt="roses" />
    </figure>
  );
}

export default SectionDividerIcon;