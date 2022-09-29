function HeroText(props) {
    const classes = 'relative text-5xl ' + props.classes;
    const sClasses = 'inline-block before before:block before:absolute before:bg-rose-800 before:-inset-1 before:-skew-y-3 before:-skew-x-6';
    return (
      <h1 className={classes}>
        <span className={sClasses}>
          <span className="relative">{props.text}</span>
          </span> 
      </h1>
    );
  }

export default HeroText;