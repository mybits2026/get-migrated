export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormState = {
  ok: boolean;
  message: string;
};