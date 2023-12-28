import { Wrapper, FormDiv, Label, Btn, INP, Head } from "./SignupStyle";
function Signup() {
  return (
    <>
      <Wrapper>
        <FormDiv>
          <Head>Sign in</Head>
          <Label>Enter your name</Label>
          <INP />
          <Label>Enter your password</Label>
          <INP />
          <Btn>Submit</Btn>
        </FormDiv>
      </Wrapper>
    </>
  );
}

export default Signup;
