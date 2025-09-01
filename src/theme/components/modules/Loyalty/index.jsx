import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';

import Hero from './Hero';

// Image Import
import logo from '../../../assets/sprocket.svg';
import React from 'react';
import styles from '../../../styles/default.module.css';




export function Component() {

  return (
    <div className={styles.container}>
      <Hero />
      <h1>Hello World</h1>
    </div>
  );
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
