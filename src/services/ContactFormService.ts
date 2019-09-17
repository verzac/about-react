import axios from 'axios';
import { aboutApiBaseUrl, shouldMock } from '../constants';
import { Record, String, Static } from 'runtypes';
import { mockAsync } from '../utils/Mocks';

const ContactFormRecord = Record({
  email: String,
  message: String,
  reason: String,
  firstName: String,
  lastName: String,
});

export type ContactForm = Static<typeof ContactFormRecord>;

async function submitContactForm(contactMeForm: Partial<ContactForm>): Promise<void> {
  if (shouldMock) {
    return mockAsync(undefined, 2000);
  }
  ContactFormRecord.check(contactMeForm);
  console.debug(aboutApiBaseUrl);
  return axios.post(`${aboutApiBaseUrl}/contact`, contactMeForm, {
    // baseURL: aboutApiBaseUrl,
  });
}

export const ContactFormService = { submitContactForm };