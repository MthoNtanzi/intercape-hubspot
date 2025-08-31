import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { RichText } from '@hubspot/cms-components';

// Image Import
import logo from '../../../assets/sprocket.svg';




export function Component({ fieldValues, hublParameters }) {
  const { src, alt, width, height } = fieldValues.logo;
  const { brandColors } = hublParameters;

  return (<>
    <h1>Hello World</h1>
  </>);
}

const richTextFieldDefaultValue = `
  <div>
    <div>
      <span>
        Deploy to your theme by running <pre>npm run deploy</pre> from the root directory
      </span>
      </div>
  </div>
`;

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'HubSpot logo' }}
      resizable={true}
    />
    <TextField
      name="headline"
      label="Headline"
      default="Getting Started with CMS React"
    />
    <RichTextField
      name="gettingStarted"
      label="Getting Started"
      default={richTextFieldDefaultValue}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Getting Started with CMS React',
};
