import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Chip, Grid } from '@material-ui/core';
import JavaScriptIcon from '../../src/images/123.svg';
import GithubIcon from '../../src/images/github.svg';
import ReactIcon from '../../src/images/react.svg';
import MongoIcon from '../../src/images/mongo.svg';
import NodeIcon from '../../src/images/node.svg';
import HtmlIcon from '../../src/images/html.svg';
import CssIcon from '../../src/images/css.svg';
import JiraIcon from '../../src/images/jira.svg';
import AntIcon from '../../src/images/ant.svg';
import NextJsIcon from '../../src/images/next.svg';
import PostmanIcon from '../../src/images/postman.svg';
import TailwindIcon from '../../src/images/tailwind.svg';
import Jquery from '../../src/images/jquery.svg' 
import mui from '../../src/images/mui.svg'
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '100%',
    margin: 'auto',
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    color: '#333333',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  chip: {
    margin: theme.spacing(1),
    borderRadius: 8,
    backgroundColor: '#301934',
    color: '#ffffff',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
    width: 24,
    height: 24,
  },
}));

const Skills = () => {
  const classes = useStyles();

  const skills = [
    'HTML', 'JavaScript', 'GitHub', 'ReactJS', 'NodeJS', 'MongoDB', 'CSS',
    'Jira', 'SQL', 'TailwindCSS', 'Material-UI', 'Ant-Design', 'ExpressJS',
    'Problem Solving', 'Jquery', 'NextJS', 'Unit Testing', 'Postman'
  ];

  const skillIcons = {
    'HTML': HtmlIcon,
    'JavaScript': JavaScriptIcon,
    'GitHub': GithubIcon,
    'ReactJS': ReactIcon,
    'NodeJS': NodeIcon,
    'MongoDB': MongoIcon,
    'CSS': CssIcon,
    'Jira': JiraIcon,
    'Ant-Design': AntIcon,
    'NextJS': NextJsIcon,
    'Postman': PostmanIcon,
    'TailwindCSS': TailwindIcon, 'Jquery': Jquery, 'Material-UI': mui
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Skills & Tools
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                label={skill}
                className={classes.chip}
                icon={skillIcons[skill] ? (
                  <img src={skillIcons[skill]} alt={`${skill} Icon`} className={classes.icon} />
                ) : null}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
