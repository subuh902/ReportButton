import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdPlayArrow } from 'react-icons/md';
import classes from './ReportButton.module.css';

export const ReportButton = memo(({ text, link }) => {
  return (
    <Link
      className={`${classes.dashboardButton} ${classes.dashboardSqsBtn}`}
      to={link}
    >
      {text}
      <MdPlayArrow className={classes.dashboardSqsBtnIcon} />
    </Link>
  );
});
