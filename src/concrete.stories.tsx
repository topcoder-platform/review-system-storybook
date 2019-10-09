import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComponentCss } from './helper/ComponentCss';
import { ComponentDeps } from './helper/ComponentDeps';
import { Dashboard } from './components/Dashboard';

const stories = storiesOf('Concrete', module);

stories.addDecorator(withInfo as any);
stories.addParameters({
  info: {
    inline: true,
    source: false,
    propTablesExclude: [ComponentDeps, ComponentCss],
  },
});

stories.add('Header', () => (
  <div>
    <Header />
    Example Implementation:
    <pre>
      <code>{`
<div>
  <TopcoderNavBrand />
  <MainMenu />
  <UserNavBrand />
</div>
      `}</code>
    </pre>
    <hr />
    <ComponentCss target="TopcoderNavBrand">
      Use {'<img>'} for Logo, {'<span>'} for TOPCODER text, {'<div />'} for
      separator
    </ComponentCss>
    <ComponentDeps target="MainMenu" deps={['Navbar']}></ComponentDeps>
    <ComponentDeps
      target="UserNavBrand"
      deps={['NotificationAlert', 'Dropdown', 'TextAvatar']}
    >
      (for separator "|" use custom {'<div />'} )
    </ComponentDeps>
    <hr />
    <img src={require('./images/header.png')} />
  </div>
));

stories.add('Footer', () => (
  <div>
    <Footer />
    Example Implementation:
    <pre>
      <code>{`
<div>
  <Copyright />
  <FooterLinks />
</div>
      `}</code>
    </pre>
    <hr />
    <ComponentCss target="Copyright" />
    <ComponentCss target="FooterLinks">
      use {'<a>'} elements and {'<span>'} for |
    </ComponentCss>
    <hr />
    <img src={require('./images/footer.png')} />
  </div>
));

stories.add('Dashboard', () => (
  <div>
    <Dashboard>content</Dashboard>
    Example Implementation:
    <pre>
      <code>{`
<div>
  <Header />
  {children}
  <Footer />
</div>
      `}</code>
    </pre>
    <img src={require('./images/dashboard.png')} />
  </div>
));
