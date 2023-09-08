/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export function MailchimpForm() {
  // const postUrl = `${proccess.env.REACT_APP_MAILCHIMP_URL}?u=${proccess.env.REACT_APP_MAILCHIMP_U}&id=${proccess.env.REACT_APP_MAILCHIMP_ID}`;

  return (
      <MailchimpSubscribe
        // url={postUrl}
        render={({ subscribe, status, message }) => (
          //   <Newsletter
          //     status={status}
          //     message={message}
          //     onValidated={(formData) => subscribe(formData)}
          //   />
          <Newsletter />
        )}
      />
  );
}
