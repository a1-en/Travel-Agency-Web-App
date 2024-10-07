import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1b77bb',
    padding: theme.spacing(4),
    width: '100%',
  },
  card: {
    maxWidth: '100%',
    marginBottom: theme.spacing(4),
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  content: {
    color: '#FFFFFF',
  },
  boldText: {
    fontWeight: 'bold',
  },
  positionTitle: {
    color: '#000000', // Black color
    fontSize: '1.5rem', // Equivalent to h3
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Experience
      </Typography>
      <Card variant="outlined" className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.positionTitle}>
            Jr. Software Engineer at CommTel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Expertise in building Security-Orchestration-Automation and Response system (SOAR). Developed and seamlessly integrated REST APIs into the system. Ensuring full responsiveness in front-end designs. Implementing agile methodologies to enhance project management efficiency and delivery timelines. Significantly contributed to component refactoring, enhancing both user experience and system performance.
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginTop: 10 }}>
            Duration: January 2022 - Present
          </Typography>
        </CardContent> 
      </Card>
    </div>
  );
};

export default Experience;
