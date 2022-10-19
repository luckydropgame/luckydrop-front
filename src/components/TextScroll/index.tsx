import React, { useRef, useLayoutEffect } from "react";

import { useStyles } from "./index.style";

function TextScroll() {
  const { classes } = useStyles();
  return (
    <div className={classes.marquee}>
      <div className={classes.marqueeContent}>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
        <div className={classes.marqueeTag}>Uncoming...Uncoming...</div>
      </div>
    </div>
  );
}

export default React.memo(TextScroll);
