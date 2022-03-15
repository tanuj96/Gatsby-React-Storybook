/* eslint-disable import/no-cycle */
import React from 'react';
// import Accordion from '../components/accordion';
import NoComponent from '../components/no-component';
// import QumuCarousel from '../components/qumu-carousel';
import PartnerLogo from '../components/partnerlogo';
import TwoColumn from '../components/twocolumn';
import CarouselImage from '../components/carousel';
import CardComponent from '../components/card';
import CashBackForm from '../components/cashback-form';
import CashBackReward from '../components/cash-backreward';
import CarouselPagination from '../components/carousel-pagination';
import Faq from '../components/faq';
import { RichText } from '../components/RichText';
import VideoPopUp from '../components/videoPopup';
import ContainerCmp from '../components/container';
import Row from '../components/row';
import Column from '../components/column';
import ImageWithText from '../components/image-with-text';
import ImageOnly from '../components/image-only';
import TabContainer from '../components/tab';
import ImageWithFocalPoint from '../components/image-focal-point';
import TableComponent from '../components/table';
import FooterLinks from '../components/footer-links';
import TabsAccordion from '../components/tabs-accordion';
import Lists from '../components/lists';
import ProgramToggle from '../components/program-toggle';
import LinkCard from '../components/link-card';
import Timelines from '../components/timeline';
import EmbeddedVideo from '../components/embedded-video';
import Banner from '../components/banner';

const ComponentsMap = {
  compMultipleCarousel: CarouselImage,
  cmpImageHero: NoComponent,
  compBrandPartnerLogoStrip: PartnerLogo,
  compImageWithText: TwoColumn,
  compQumuCarousel: VideoPopUp,
  compNColumnLayout: CardComponent,
  compRewardCalc: CashBackForm,
  notfound: NoComponent,
  compQuoteCarousel: CarouselPagination,
  // cmpFaqAccordion: Accordion,
  compFaqAccordion: Faq,
  compTextWithButton: CashBackReward,
  compRichTextBlock: RichText,
  compContainer: ContainerCmp,
  compRow: Row,
  compColumn: Column,
  imageWithText2: ImageWithText,
  compImageOnly: ImageOnly,
  compTitleWithThreeTextFields: NoComponent,
  tabBox: TabContainer,
  imageWithFocalPoint: ImageWithFocalPoint,
  compTable: TableComponent,
  footerLinks: FooterLinks,
  accordion: TabsAccordion,
  compSubAccordion: TabsAccordion,
  compListContainer: Lists,
  compToggle: ProgramToggle,
  compCardsContainer: LinkCard,
  compTimeline: Timelines,
  compVideoEmbedded: EmbeddedVideo,
  compBanner: Banner
};

export default (component, data, partnerCode) => {
  if (typeof ComponentsMap[component] !== 'undefined') {
    return React.createElement(ComponentsMap[component], {
      component,
      data,
      partnerCode
    });
  }
  return React.createElement(NoComponent, {
    component, partnerCode
  });
};
