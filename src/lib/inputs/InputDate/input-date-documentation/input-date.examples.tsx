import React, { FC } from 'react';
import { FormikProps, useFormik } from 'formik';
import { InputDate, Form } from '../../..';

export const inputDateExample1: FC<any> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formikProps: FormikProps<any> = useFormik({
    initialValues: {
      sampleDate: new Date(),
      formattedDate: undefined
    },
    onSubmit: () => undefined
  });

  return (
    <>
      Value: {formikProps.values.sampleDate instanceof Date ? formikProps.values.sampleDate.toLocaleDateString() : ''}
      <InputDate name="sampleDate" formikProps={formikProps} />
      Value: {formikProps.values.formattedDate}
      <InputDate name="formattedDate" valueFormat={'LL/dd/yyyy'} formikProps={formikProps} />
    </>
  );
};

export const inputDateExample2: FC<any> = () => (
  <Form
    initialValues={{
      sampleDate: new Date(),
      formattedDate: ''
    }}
    onSubmit={() => undefined}
  >
    {formikProps => (
      <>
        Value: {formikProps.values.sampleDate instanceof Date ? formikProps.values.sampleDate.toLocaleDateString() : ''}
        <InputDate name="sampleDate" formikProps={formikProps} />
        Value: {formikProps.values.formattedDate}
        <InputDate name="formattedDate" valueFormat={'LL/dd/yyyy'} formikProps={formikProps} />
      </>
    )}
  </Form>
);
