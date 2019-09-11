import axios, { AxiosResponse } from 'axios';
import { aboutApiBaseUrl } from '../constants';

export interface ContactForm {
  email: string;
  message: string;
  reason: string;
  firstName: string;
  lastName: string;
};

async function submitContactFormService(contactMeForm: ContactForm): Promise<AxiosResponse> {
  return axios.post('/contact', contactMeForm, {
    baseURL: aboutApiBaseUrl,
  });
}

export const ContactFormService = { submitContactFormService };