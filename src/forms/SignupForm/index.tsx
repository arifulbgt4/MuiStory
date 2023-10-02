"use client";
// React
import { FC } from "react";
// @mui
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
// packages
import { Form as FinalForm } from "react-final-form";
import { FormApi } from "final-form";

// components
import { TextField, required, composeValidators } from "src/components/Input";

// Types
import { SignupFormProps, FormDataOptions } from "./Types";

// actions
import { signUp } from "./actions";

const INITIAL_VALUES: FormDataOptions = {
  fullname: "",
  email: "",
  password: "",
};

const SignupForm: FC<SignupFormProps> = () => {
  const onSubmitForm = async (
    values: FormDataOptions,
    form: FormApi<FormDataOptions, FormDataOptions>
  ) => {
    try {
      await signUp(values);
      form.restart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Box
          sx={(theme) => ({
            px: 5,
            py: 4,
            borderRadius: 2,
            [theme.breakpoints.down("md")]: {
              px: 0,
            },
          })}
        >
          <Typography variant="h5" sx={{ mb: 4 }}>
            Sign up
          </Typography>
          <FinalForm
            onSubmit={onSubmitForm}
            initialValues={INITIAL_VALUES}
            render={({ handleSubmit, values, errors, submitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="fullname"
                    label="Full name"
                    required
                    size="small"
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(
                        required("Full name required")
                      ),
                    }}
                    sx={{
                      mb: 2.5,
                    }}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    required
                    size="small"
                    type="email"
                    fullWidth
                    fieldProps={{
                      validate: composeValidators(required("Email required")),
                    }}
                    sx={{
                      mb: 2.5,
                    }}
                  />
                  <TextField
                    name="password"
                    label="Password"
                    required
                    size="small"
                    fullWidth
                    type="password"
                    fieldProps={{
                      validate: composeValidators(
                        required("Password required")
                      ),
                    }}
                    sx={{
                      mb: 2.5,
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="info"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </form>
              );
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

// Exports
export * from "./Types";
export default SignupForm;
