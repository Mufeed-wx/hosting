import csty from "../style/contact.module.css";
import {
  Wrapper,
  FormDiv,
  Label,
  Btn,
  INP,
  Head,
  MINP,
  CFormDiv,
} from "./SignupStyle";
export default function Contact() {
  return (
    <>
      <section id={csty.section}>
        <main id={csty.main}>
          <div className={csty.contactBanner}></div>
          <div className={csty.contactForm}>
            <CFormDiv>
              <Head>Talk with our team</Head>
              <Label>Enter your name</Label>
              <INP type="tel" />
              <Label>Enter your number</Label>
              <INP />
              <Label>Message</Label>
              <MINP />
              <Btn>Register</Btn>
            </CFormDiv>
          </div>
        </main>
      </section>
    </>
  );
}
