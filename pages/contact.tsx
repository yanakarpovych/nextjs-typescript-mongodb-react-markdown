import { Fragment } from "react/jsx-runtime";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Send your message here"/>
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage;