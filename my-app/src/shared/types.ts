export enum SelectedPage {
    Home = 'home',
    About = "about",
    Contact = "contact",
    Reviews = "reviews"
  }

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}