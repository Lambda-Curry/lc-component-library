import { useContext } from 'react';
import { FormikContext, FormikContextType } from 'formik';

// This hook safely gets the Formik context if available, or returns null if not
export const useFormContext = <T>() => {
  try {
    // Using context this way instead of useFormikContext suppresses the error if it is not within Formik
    const context = useContext<FormikContextType<T>>(FormikContext);
    return context;
  } catch (error) {
    // Return null if context is not available or there's an error
    return null;
  }
};
