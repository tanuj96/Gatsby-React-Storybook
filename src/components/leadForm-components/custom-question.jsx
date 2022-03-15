/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import { Typography, TextField, OutlinedInput } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import { navigate } from 'gatsby-link';
import { myStyles } from './styles';
import { LeadFormContextDispatch } from '../../utils/leadForm-context';
import ThemeContext from '../../utils/theme-context';
import { themeStyles } from '../../styles';

export default function CustomQuestion({ data, context }) {
  const classes = myStyles();
  const dispatch = useContext(LeadFormContextDispatch);
  const partnerTheme = useContext(ThemeContext);
  const globalThemeCss = themeStyles(partnerTheme);
  const [nextButtonCheck, setNextButtonCheck] = useState(true);
  const [lead, setLead] = useState({});
  const [values,setValues] = useState([])
  const [compBasicModalLeadForm, setCompBasicModalLeadForm] = useState(context.appData.compBasicModalLeadForm);
 
  useEffect(() => {
    const getLead = JSON.parse(localStorage.getItem('lead'));
    // getLead.customQuestion && setValues(getLead.customQuestion || {})
    setLead(getLead);
  }, []);

  useEffect(() => {
    let questionValues = compBasicModalLeadForm.additionalInfoScreen[0].additionalQuestions.map((additionvalue, index) => {
      if (additionvalue.typeOfAnswer === 'Dropdown' && (additionvalue.value === undefined || additionvalue.value === '')) {
        return {
          ...additionvalue,
          value: additionvalue.fieldOptions[0]
        }
      }else {
        return additionvalue
      }
    })
    let newUpdate= {
      ...compBasicModalLeadForm,
      additionalInfoScreen: [{
        ...compBasicModalLeadForm.additionalInfoScreen[0],
        additionalQuestions: questionValues
      }]
  }
    setCompBasicModalLeadForm(newUpdate)
  }, []);

  const handleClickYes = (path) => {
    dispatch({ type: 'CUSTOM_QUESTION', value: { ...lead, isPreapproved: true } });
    navigate(path);
  };

  const handleClickNo = (path) => {
    dispatch({
      type: 'CUSTOM_QUESTION',
      value: { ...lead, isPreapproved: false }
    });
    navigate(path);
  };

  const previousScreen = () => {
    if (context.flowOrder === 'Buying, Selling') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/sell-location');
      } else if (lead.operationType === 'BUY') {
        navigate('/buy-location');
      } else if (lead.operationType === 'SELL') {
        navigate('/sell-location');
      }
    } else if (context.flowOrder === 'Selling, Buying') {
      if (lead.operationType === 'BUYSELL') {
        navigate('/buy-location');
      } else if (lead.operationType === 'BUY') {
        navigate('/buy-location');
      } else if (lead.operationType === 'SELL') {
        navigate('/sell-location');
      }
    } else if (context.flowOrder === 'Buying Only') {
      navigate('/buy-location');
    } else if (context.flowOrder === 'Selling Only') {
      navigate('/sell-location');
    }
    // navigate('/sell-location');
  };

  const submitAnswer = () => {
    dispatch({
      type: 'CUSTOM_QUESTION',
      value: { ...lead, isPreapproved: false, customQuestion: values }
    });
    navigate('/thankyou');
  };
  const onValueupdate = (event, questionIndex) => {
    let questionValues= compBasicModalLeadForm.additionalInfoScreen[0].additionalQuestions.map((additionvalue, index)=> {
      if(index === questionIndex) {
        return {
          ...additionvalue,
          value: event.target.value
        }
      }else {
        return additionvalue
      }
    })

    setValues(questionValues)
    let newUpdate= {
      ...compBasicModalLeadForm,
      additionalInfoScreen: [{
        ...compBasicModalLeadForm.additionalInfoScreen[0],
        additionalQuestions: questionValues
      }]
  }
    setCompBasicModalLeadForm(newUpdate)
  }
  useEffect(()=>{
    let flagValue= false;
    compBasicModalLeadForm.additionalInfoScreen[0].additionalQuestions.map((additionValue, index)=> {
        if(additionValue.isThisQuestionRequired && (additionValue.value == undefined || additionValue.value == '')){
          flagValue = true
        }
    })
    setNextButtonCheck(flagValue)
  },[compBasicModalLeadForm])

  const closeModal = () => {
    navigate('/');
    localStorage.removeItem('lead');
  };

  return (
    <Container className={classes.root}>
      <Grid container direction="column" alignItems="center" justify="center">
        <div className={classes.leadFormHelperBar}>
          <IconButton aria-label="close" className={classes.margin} onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1" className={classes.pagestitle}>
            {context.appData.compBasicModalLeadForm && context.appData.compBasicModalLeadForm.additionalInfoScreen?.length > 0
            && context.appData.compBasicModalLeadForm.additionalInfoScreen[0].screenTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {compBasicModalLeadForm.additionalInfoScreen?.length > 0 ? compBasicModalLeadForm.additionalInfoScreen.map((additionInfo, index) => (
            <>
              {additionInfo.additionalQuestions.map((question, questionIndex) => (
                <Paper className={classes.paper}>
                  <Typography variant="subtitle1" component="div" className={clsx(classes.paddingBottom5, classes.fontArial)}>
                    {JSON.parse(question.questionLabel.raw).content[0].content[0].value}
                  </Typography>
                  {question.typeOfAnswer === 'Dropdown' ? (
                    <NativeSelect
                      classes={{
                        root: clsx(classes.describeDropdown, classes.options, classes.width98)
                      }}
                      className={clsx(classes.displayBlock, classes.select, classes.fontArial)}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native'
                      }}
                      disableUnderline
                      onChange={e => { onValueupdate(e, questionIndex); }}
                    >
                      {question.fieldOptions.map((quest, fieldIndex) => (
                        <option className={clsx(classes.options, classes.fontArial)} style={{ padding: '5px 30px 1px 15px', backgroundColor: 'rgb(243, 243, 241) !important' }} value={quest}>{quest}</option>
                      ))}
                    </NativeSelect>
                  ) : (
                    <div>
                      <FormControl sx={{ m: 1 }} variant="outlined" className={clsx(classes.displayBlock, classes.zeroPadding, classes.textField)}>
                        <OutlinedInput
                          className={clsx(classes.displayBlock, classes.zeroPadding, classes.fontArial)}
                          id="outlined-adornment-weight"
                          value={question.value ? question.value : ''}
                          aria-describedby="outlined-weight-helper-text"
                          placeholder={JSON.parse(question.questionLabel.raw).content[0].content[0].value}
                          onChange={e => { onValueupdate(e, questionIndex); }}
                          inputProps={{
                            'aria-label': 'weight',
                            style: {
                              padding: '9px',
                              borderColor: 'black'
                            }
                          }}
                        />
                      </FormControl>
                    </div>
                  )}
                </Paper>
              ))}
            </>
          )) : (
            <div>

            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        {compBasicModalLeadForm.additionalInfoScreen?.length > 0 ? compBasicModalLeadForm.additionalInfoScreen.map((additionInfo, index)=> 
            (<>
              {additionInfo.additionalQuestions.map((question, questionIndex)=> (          
                   <Paper className={classes.paper}> 
                      <Typography variant="subtitle1" component="div" className={clsx(classes.paddingBottom5, classes.fontArial)}>
                          {JSON.parse(question.questionLabel.raw).content[0].content[0].value}
                      </Typography>
                      {question.typeOfAnswer == "Dropdown" ? 
                          <NativeSelect
                            classes={{
                              root: clsx(classes.describeDropdown, classes.options, classes.width98)
                            }}
                            className={clsx(classes.displayBlock, classes.select, classes.fontArial)}
                            inputProps={{
                              name: 'age',
                              id: 'uncontrolled-native',
                            }}
                            disableUnderline
                            onChange={e=>{onValueupdate(e,questionIndex)}}
                          >
                            {question.fieldOptions.map((quest, fieldIndex)=> (
                                <option className={clsx(classes.options, classes.fontArial)} style={{ padding: '5px 30px 1px 15px', backgroundColor: 'rgb(243, 243, 241) !important'}} value={quest}>{quest}</option>
                            ))
                            }
                          </NativeSelect>
                          :
                          <div className={classes.textField}>
                          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className={clsx(classes.displayBlock,classes.zeroPadding, classes.textField)}>
                              <OutlinedInput
                                className={clsx(classes.displayBlock,classes.zeroPadding, classes.fontArial)}
                                id="outlined-adornment-weight"
                                value={question.value ? question.value:''}
                                aria-describedby="outlined-weight-helper-text"
                                placeholder= {JSON.parse(question.questionLabel.raw).content[0].content[0].value}
                                onChange={e=>{onValueupdate(e,questionIndex)}}
                                inputProps={{
                                  'aria-label': 'weight',
                                  style:{
                                   padding: '10px',
                                   borderColor: 'black'
                                  },
                                }}
                              />
                          </FormControl>
                          </div>
                      }
                    </Paper>
              ))}
              </>))
            : (
              <div>
              </div>
            )}
        </Grid> 
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={clsx(classes.paper, classes.typoAlign)}>
            <Button onClick={previousScreen} size="large" className={clsx(globalThemeCss.button, classes.prevButton)} variant="contained">{context.prevButtonLabel}</Button>
            <Button onClick={submitAnswer} size="large" className={clsx(globalThemeCss.button, classes.nextButton)} variant="contained" disabled={nextButtonCheck}>{context.nextButtonLabel}</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
