export interface NavLink {
  id: string;
  title: string;
}

export interface Beverage {
  name: string;
  country: string;
  detail: string;
  price: string;
}

export interface ProfileImage {
  imgPath: string;
}

export interface SliderItem {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface StoreContact {
  phone: string;
  email: string;
}

export interface StoreInfo {
  heading: string;
  address: string;
  contact: StoreContact;
}
