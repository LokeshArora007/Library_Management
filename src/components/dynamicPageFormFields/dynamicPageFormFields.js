import React, { useState } from 'react';
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  FormHelperText,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import { DatePicker } from '@material-ui/pickers';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../globalCss.css';

const useStyles = makeStyles((theme) => ({
  marginLeftRight: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  formControl: {
    display: 'flex'
  },
  cancelBtnMargin: {
    marginRight: '20px'
  },
  root: {
    background: theme.background,
    border: 0,
    color: "white",
    height: 48,
    padding: "20px 10px"
  }
}));

const DynamicPageFormFields = (props) => {
  const classes = useStyles();
  const {
    pageType,
    addedGroupId,
    formValues,
    setPageType,
    cancelClick
  } = props;

  const [fieldData, setFieldData] = React.useState({
    page_title: '',
    page_name: '',
    status: '',
    createdAt: new Date()
  });

  const schema = Yup.object().shape({
    page_title: Yup.string().required('This field is required'),
    page_name: Yup.string().required('This field is required'),
    status: Yup.string().required('This field is required'),
    createdAt: Yup.string().required('This field is required')
  });
  //Submit form method
  const onFormSubmit = async (values, { resetForm, setErrors }) => {
    console.log(values)
  };

  React.useEffect(() => {
    if (formValues && formValues.title && pageType !== 'add') {
      setFieldData(formValues);
    }
  }, [formValues]);

  return (
    <>
      <Formik
        initialValues={fieldData}
        onSubmit={onFormSubmit}
        validationSchema={schema}
        enableReinitialize={true}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <>
              <Grid item xs={12} md={12} lg={12}> 
                <form onSubmit={handleSubmit} noValidate>
                  <Grid container direction="row">
                    <Grid item md={6} className={`${classes.marginLeftRight}`}>
                      <TextField
                        className={classes.formControl}
                        disabled={pageType === 'view'}
                        margin="normal"
                        placeholder="Page Title"
                        required
                        fullWidth
                        id="page_title"
                        name="page_title"
                        value={values.page_title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.page_title && touched.page_title}
                        helperText={
                          errors.page_title &&
                          touched.page_title &&
                          errors.page_title
                        }
                        label="Page Title"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={12} className={`${classes.marginLeftRight}`} >
                      <TextField
                        className={classes.formControl}
                        disabled={pageType === 'view'}
                        margin="normal"
                        required
                        fullWidth
                        placeholder="Page Name"
                        id="page_name"
                        name="page_name"
                        label="Page Name"
                        variant="outlined"
                        value={values.page_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.page_name && touched.page_name}
                        helperText={
                          errors.page_name && touched.page_name && errors.page_name
                        }
                      />
                    </Grid>
                    <Grid item md={6} className={`${classes.marginLeftRight}`} >
                      <FormControl required variant="outlined" className={classes.formControl} margin="normal">
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          placeholder="Status"
                          name="status"
                          value={values.status}
                          onChange={handleChange}
                          label="Status"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={'active'}>Active</MenuItem>
                          <MenuItem value={'draft'}>Draft</MenuItem>
                          <MenuItem value={'inactive'}>In Active</MenuItem>
                        </Select>
                        <FormHelperText
                          className={errors.status && touched.status && errors.status ? 'Mui-error' : 'Mui-error'}
                        >
                          {errors.status && touched.status && errors.status}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item md={6} className={`${classes.marginLeftRight}`} >
                      <DatePicker
                        className={`${classes.autoComp} ${classes.formControl}`}
                        disabled={(pageType === 'view')}
                        variant="inline"
                        inputVariant="outlined"
                        label="Created At"
                        placeholder="MM/DD/YYYY"
                        format="MM/DD/YYYY"                        
                        autoOk
                        required
                        margin="normal"
                        id="createdAt"
                        name="createdAt"
                        invalidLabel="Select a valid date format"
                        value={
                          values.createdAt ? values.createdAt : null
                        }
                        onChange={(v) => {
                          setFieldValue('createdAt', v, true);
                        }}
                        onBlur={handleBlur}
                        error={errors.createdAt && touched.createdAt}
                        helperText={errors.createdAt && touched.createdAt && errors.createdAt}
                      />
                    </Grid>
                  </Grid>

                  <Grid container justify="flex-end" style={{marginTop: '20px'}}>
                    {(pageType === 'add' ||
                      pageType === 'edit') && (                       
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={cancelClick}
                          className={classes.cancelBtnMargin}
                          startIcon={<CancelIcon />}
                        >
                          Cancel
                      </Button>
                    )}
                    {pageType !== 'view' && (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={``}
                        disabled={addedGroupId}
                      >
                        {pageType === 'add'
                          ? 'Next'
                          : 'Save'}
                      </Button>
                    )}
                    {pageType !== 'add' &&
                      pageType !== 'edit' &&
                        formValues && formValues.is_active !== 'n' && (                        
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            setPageType('edit')
                          }
                          className={``}
                          startIcon={<EditIcon />}
                        >
                          Edit
                        </Button>
                    )}
                  </Grid>
                </form>
              </Grid>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default DynamicPageFormFields;
