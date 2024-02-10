export type WelcomeSection = {
  title: string;
  description: string;
};

export type OfferSection = {
  title: string;
  descriptionList: string[];
  cards: {
    title: string;
    description: string;
  }[];
};

export type ImageInfo = {
  imgUrl: string;
  side: string;
};

export type WorkSection = {
  title: string;
  description: string;
  images: ImageInfo[];
};

export type StepInfo = {
  icon: string;
  title: string;
  description: string;
};

export type MethodSection = {
  title: string;
  steps: StepInfo[];
};

export type Opinion = {
  userName: string;
  title: string;
  description: string;
};

export type OpinionSection = {
  title: string;
  list: Opinion[];
};

export type PropertyInfo = {
  title: string;
  description: string;
};

export type InfoSection = {
  title: string;
  description: string;
  img: string;
  properties: PropertyInfo[];
};

export type ContactFormSection = {
  title: string;
  description: string;
  form: string[];
};

export type ContactInfo = {
  mobilePhone: string;
  phone: string;
  email: string;
  address: string;
};

export type ContactSection = ContactInfo;

export type HomePageType = {
  welcome: WelcomeSection;
  ourOfert: OfferSection;
  ourWork: WorkSection;
  ourMethod: MethodSection;
  opinions: OpinionSection;
  ourInfo: InfoSection;
  ourContactForm: ContactFormSection;
  ourContact: ContactSection;
};
