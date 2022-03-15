import React, { useState, useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { myStyles } from './styles';
import ThemeContext from '../../utils/theme-context';
// eslint-disable-next-line import/no-cycle

export default function ProgramToggle({ data }) {
  const partnerTheme = useContext(ThemeContext);
  const classes = myStyles(partnerTheme);
  const [alignment, setAlignment] = useState('left');
  const [selected, setSelected] = useState('buying');
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleToggle = (value) => {
    setSelected(value);
  };

  return (

    <Container className={classes.newContainer}>

      <Card className={classes.root}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={5} lg={5}>
            {(selected === 'buying') && (
            <CardMedia
              className={classes.cover}
              image={`${data.buyingHomeBody.toggleBodyImage.file.url}`}
              title="Live from space album cover"
            />
            )}
            {(selected === 'selling') && (
            <CardMedia
              className={classes.cover}
              image={`${data.sellingHomeBody.toggleBodyImage.file.url}`}
              title="Live from space album cover"
            />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="Toggle button group"
                  >
                    <ToggleButton
                      aria-label={data.toggleButton1Label}
                      value="selling"
                      onClick={() => handleToggle('selling')}
                      classes={{ selected: classes.selected }}
                    >
                      {data.toggleButton1Label}
                    </ToggleButton>
                    <ToggleButton
                      aria-label={data.toggleButton2Label}
                      value="buying"
                      setToggle
                      onClick={() => handleToggle('buying')}
                      classes={{ selected: classes.selected }}
                    >
                      {data.toggleButton2Label}
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {(selected === 'buying') && (documentToReactComponents(JSON.parse(data?.buyingHomeBody?.toggleBodyText?.raw)))}
                  {(selected === 'selling') && documentToReactComponents(JSON.parse(data?.sellingHomeBody?.toggleBodyText?.raw))}
                </Typography>
              </CardContent>
            </div>
          </Grid>
        </Grid>

      </Card>
    </Container>
  );
}
