"use client";
// React
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// @mui
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
// packages
import { Form as FinalForm } from "react-final-form";
import { FormApi } from "final-form";

// components
import { TextField, required, composeValidators } from "src/components/Input";

// Types
import { SiginFormProps, FormDataOptions } from "./Types";

// actions
import { signIn } from "./actions";

const INITIAL_VALUES: Omit<FormDataOptions, "callbackUrl"> = {
  email: "",
  password: "",
};

const SigninForm: FC<SiginFormProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmitForm = async (
    values: Omit<FormDataOptions, "callbackUrl">,
    form: FormApi<FormDataOptions, Omit<FormDataOptions, "callbackUrl">>
  ) => {
    try {
      const res = (await signIn({ ...values, callbackUrl })) as unknown as any;
      if (!!res.error) return;

      router.push(callbackUrl);
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
            Login
          </Typography>
          <FinalForm
            onSubmit={onSubmitForm}
            initialValues={INITIAL_VALUES}
            render={({ handleSubmit, values, errors, submitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="email"
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
                    id="password"
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
export default SigninForm;
