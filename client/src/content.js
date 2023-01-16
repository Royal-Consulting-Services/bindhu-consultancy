import { Slide1, Slide2, Slide3, Slide4 } from './images/images';
import {
  faDatabase,
  faHeadset,
  faCloud,
  faSitemap,
  faBusinessTime,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'react-bootstrap';
import {
  Implement,
  Projmanag,
  Staffaug,
  Consult,
  Migrate,
  Whychoose,
  Databasemigrte,
  Itconsulting,
  Cloudmigration,
  Cloudarchitecture,
  Businessanalytics,
} from './images/images';
export const SLIDERS = [
  {
    src: Slide1,
    altText: 'Slide 1',
    captionText:
      'Value-Added Human Resources and Organizational Development Solutions',
    captionHeader: '',
  },
  {
    src: Slide2,
    altText: 'Slide 2',
    captionText: 'Leadership Development Programs in Manila, Clark, and Cebu',
    captionHeader: '',
  },
  {
    src: Slide3,
    altText: 'Slide 3',
    captionText:
      'Business Continuity Plan , Remote Work Policy , Business Recovery Strategies , Workforce Planning , Workplace Health and Safety',
    captionHeader: ' ',
  },
  {
    src: Slide4,
    altText: 'Slide 4',
    captionText: 'Developing Innovative HR Strategies',
    captionHeader: '',
  },
];

export const MENULINK = [
  {
    key: 'home',
    text: 'Home',
  },
  {
    key: 'aboutus',
    text: 'About Us',
  },
  {
    key: 'service',
    text: 'Service',
  },
  {
    key: 'careers',
    text: 'Careers',
  },
  {
    key: 'contact',
    text: 'Contact',
  },
];
export const ADMINMENULINK = [];

export const SERVICES = [
  {
    title: 'Database Creation & Database Migrations',
    id: 'dc&dm',
    icon: faDatabase,
    image: Databasemigrte,
    content:
      "Our certified cloud engineers provide a tailored database creation & database migrations service that helps cut the time and cost of creating & migrating your data to the public cloud platform. No matter what kind of database you're using - Oracle, SQL server, or something else - we have the knowledge and skills to get it working on the cloud.",
  },
  {
    title: 'IT Consulting',
    id: 'itconsulting',
    icon: faHeadset,
    image: Itconsulting,
    content: `Our IT consulting solutions focus on helping you achieve specific business outcomes, through digital strategies, process optimization, and IT infrastructure services.

        With our IT consulting services, we aim to help you streamline and secure your business operations quickly and efficiently. All our tech professionals have extensive domain knowledge and access to advanced solutions, so they can easily create an IT roadmap that meets your organizational needs.`,
  },
  {
    title: 'Cloud Migration',
    id: 'cloudmigration',
    icon: faCloud,
    image: Cloudmigration,
    content:
      "At BR Group Tech, our cloud migration service is designed to lower your company's need for physical resources and reduce overhead costs while increasing productivity. Our team of specialists will use proven methodologies and advanced tools to quickly and effectively transform your business from on-premise to cloud-based, ensuring a smooth process that won't disrupt your day-to-day operations.",
  },
  {
    title: 'Cloud Architecture',
    id: 'cloudrchitecture',
    icon: faSitemap,
    image: Cloudarchitecture,
    content:
      'Our team provides tailored cloud architecture services that are based on what future businesses will need. We help you to adopt new-age architectures that are cloud-powered and designed for high performance. We have the expertise to build robust designs that simplify business opportunities and workflows. By putting the best practices combined with our expertise at the core of your projects, you can be confident that your business is future-proofed.',
  },
  {
    title: 'Business Analytics',
    id: 'businessanalytics',
    icon: faBusinessTime,
    image: Businessanalytics,
    content:
      'At BR Group Tech, we provide ad hoc business analytics services to help our clients make better decisions. Our team helps clients gather insights on customer behavior, employees’ performance, and partners’ interaction. This data helps organizations align resources for better performance and achieving short- and long-term goals.',
  },
];

export const DSERVICES = [
  {
    title: 'Implementation',
    image: Implement,
  },
  {
    title: 'Project management',
    image: Projmanag,
  },
  {
    title: 'Staff Augmentation',
    image: Staffaug,
  },
  {
    title: 'Consultancy',
    image: Consult,
  },
  {
    title: 'Migration',
    image: Migrate,
  },
];

function careerDescribcont() {
  return (
    <>
      <b style={{ display: 'block', marginTop: '20px' }}>
        Keys & Responsibility
      </b>
      <ul>
        <li>
          {' '}
          Collaborating with Solutions Architects, Business Analysts, Project
          Leads, DevOps, Security Engineers & Scrum{' '}
        </li>
        <li>Masters to deliver working software</li>
        <li>Developing commercial progressive SSR Angular applications</li>
        <li>Using TypeScript on a daily basis</li>
        <li>
          Creating integrations with headless backend systems and third-party
          SaaS products
        </li>
        <li>Performing technical analysis of business requirements</li>
        <li>
          Providing bullet-proof functionality in cooperation with the QA team
        </li>
      </ul>
      <b style={{ display: 'block', marginTop: '20px' }}>
        Key Requirements/Minimum Qualifications :
      </b>
      <ul>
        <li>
          {' '}
          Have 4+ years of professional experience in Frontend Web application
          development Are experienced in working with Angular 2+ with TypeScript
        </li>
        <li>
          Have Experience in building responsive web applications using HTML5,
          CSS, JavaScript
        </li>
        <li>
          Have Experience working in an Agile environment along with JIRA,
          Confluence, Bitbucket and Git
        </li>
        <li>Have experience with ngrx, rxjs</li>
        <li>Have good knowledge of CSS/SCSS</li>
        <li>
          Have experience with Unit testing (ideally Jasmine/Karma) or E2E
          testing (ideally Cypress)
        </li>
        <li>Speak English fluently</li>
      </ul>
      <b style={{ display: 'block', marginTop: '20px' }}>
        {' '}
        Preferred Qualifications/Skills/Experience :
      </b>
      <ul>
        <li> Know how to work with SAP Commerce - it's a big plus</li>
        <li>Like to get involved in additional initiatives</li>
        <li>Know what a development architecture is</li>
        <li>Easily coordinate your work</li>
      </ul>
    </>
  );
}

export const CAREERLIST = [
  {
    name: 'UI Developer',
    location: 'Bangalore',
    description:
      "   A UI Developer is a technical role that is responsible for creating a product's coding and development in a way that is attractive and convenient for users. A UI developer uses programming code to create interactive programs that enhance a customer's experience with a brand and facilitate an enjoyable experience on the business's website or platform. UI developers also need to have a detailed understanding of coding and transfer the brand's strengths through the interface of a product.",
    careerdescribcont: careerDescribcont(),
  },
  {
    name: 'HR',
    location: 'Bangalore',
    description:
      'We are looking to employ an HR officer with excellent communication skills, both written and verbal. The HR officer is expected to be knowledgeable with employment legislation and possess strategic and commercial insight to the labor process. He or she must be able to negotiate with diplomacy.To ensure success, an HR officer should display excellent organizational skills, good time-management skills, and the ability to multi-task in a fast-paced environment. A top HR officer should possess remarkable conflict management and decision-making skills to ensure employee compliance.',
    careerdescribcont: careerDescribcont(),
  },
  {
    name: 'PHP Developer',
    location: 'Hydrabad',
    description:
      'A PHP developer works as part of a team in programming applications that are often web-based for clients. Key duties of this role include the writing of PHP scripts and coding to create or modify software and applications according to a clients needs. Other tasks also include troubleshooting any errors or issues relating to PHP programs and creating documentation for the same. The career advancements for PHP developers include promotions to a senior position, managerial roles such as a software development manager or directorial roles such as an information technology director.',
    careerdescribcont: careerDescribcont(),
  },
];
