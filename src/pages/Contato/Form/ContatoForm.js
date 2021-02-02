import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import asyncValidate from "./asyncValidate";
import validate from "./validate";

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Mulher" />
      <FormControlLabel value="male" control={<Radio />} label="Homem" />
      <FormControlLabel value="other" control={<Radio />} label="Outro" />
    </RadioGroup>
  </FormControl>
);

const ContatoForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          label="Primeiro Nome"
          component={renderTextField}
        />
      </div>
      <div>
        <Field
          name="Last Name"
          label="Ultimo Nome"
          component={renderTextField}
        />
      </div>
      <div>
        <Field name="email" label="Email" component={renderTextField} />
      </div>
      <div>
        <Field name="sex" label="Sexo" component={radioButton} />
      </div>
      <div>
        <Field name="Idade" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div />
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiline
          rowsMax="4"
          margin="normal"
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "ContatoForm", // a unique identifier for this form
  validate,
  asyncValidate,
})(ContatoForm);
