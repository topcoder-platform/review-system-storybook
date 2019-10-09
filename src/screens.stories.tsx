import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ComponentDeps } from './helper/ComponentDeps';
import { ComponentCss } from './helper/ComponentCss';

const stories = storiesOf('Screens', module);

stories.addDecorator(withInfo as any);
stories.addParameters({
  info: {
    inline: true,
    source: false,
    propTablesExclude: [ComponentDeps, ComponentCss],
  },
});

stories.add('Review Process Dashboard', () => (
  <div>
    Example Implementation:
    <pre>
      <code>{`
<Dashboard>
  <ReviewProcessFilter />
  <ReviewProcessTable />
</Dashboard>
      `}</code>
    </pre>
    <hr />
    <ComponentDeps
      target="ReviewProcessFilter"
      deps={['Checkbox', 'SearchFilter', 'Button']}
    />
    <ComponentDeps target="ReviewProcessTable" deps={['DataTable']} />
    <hr />
    <img src={require('./images/review_process.png')} />
  </div>
));

stories.add('Create Review', () => (
  <div>
    Example Implementation:
    <pre>
      <code>{`
<Dashboard>
  <BackBanner url="/reviews">New Review Process</BackBanner>
  <ReviewSidebar />
  <ReviewContent />
  <ReviewForm />
</Dashboard>
      `}</code>
    </pre>
    <hr />
    <ComponentDeps
      target="ReviewSidebar"
      deps={['Tabs', 'List', 'IconListItem', 'CheckboxListItem']}
    >
      . "* Add an event to get started" should a custom {'<div>'} element inside{' '}
      {'<Tab>'} content/children.
    </ComponentDeps>
    <ComponentDeps target="ReviewContent" deps={['DndPlaceholder']} />
    <ComponentDeps target="ReviewForm" deps={['Input', 'Button', 'Checkbox']}>
      ."TRACK" should be a custom {'<div>'} element.
    </ComponentDeps>
    <hr />
    <img src={require('./images/create_review.png')} />
    <hr />
    <h3>With Non-empty Content</h3>
    Example Implementation of ReviewItem:
    <br />
    <pre>
      <code>{`
<ListItem right={
  <div>
    Weight
    <InputCounter />
    <CloseIcon />
  </div>
}>
  <Checkbox readOnly type="radio" checked radioType="check">SonarQube</Checkbox>
</ListItem>
      `}</code>
    </pre>
    <ComponentDeps
      target="ReviewContent"
      deps={[
        'DndPlaceholder',
        'DottedPlaceholder',
        'Alert',
        'SectionTab',
        'ListItem',
        'InputCounter',
      ]}
    />
    <img src={require('./images/create_review_content.png')} />
  </div>
));

stories.add('Review Steps', () => (
  <div>
    Example Implementation:
    <pre>
      <code>{`
<Dashboard>
  <BackBanner url="/reviews">New Review Process</BackBanner>
  <PreviewSteps />
  <PreviewSidebar />
</Dashboard>
      `}</code>
    </pre>
    <hr />
    <ComponentDeps
      target="PreviewSteps"
      deps={['PreviewPage', 'Accordion', 'IconChain', 'IconListItem']}
    />
    <ComponentDeps target="PreviewSidebar" deps={['DisplayValue', 'Button']} />
    <hr />
    <img src={require('./images/preview_review.png')} />
  </div>
));

stories.add('Expanded Event View', () => (
  <div>
    Example Implementation:
    <pre>
      <code>{`
<Modal>
  <ExpandedTitle />
  <ReviewStepsSidebar />
  <EventDetails />
</Modal>
      `}</code>
    </pre>
    <hr />
    <ComponentCss target="ExpandedTitle">
      All elements in this components are custom {'<div />'} and/or{' '}
      {'<strong />'} elements. Collapse icon should be {'<svg>'} inside{' '}
      {'<button>'} or {'<a>'}. Use name ExpandedTitle or ExpandedEventViewTitle.
    </ComponentCss>
    <ComponentDeps
      target="ReviewStepsSidebar"
      deps={['SearchInput', 'IconListItem']}
    >
      ."Review Steps" is custom {'<strong />'}, "4 steps added" are custom{' '}
      {'<div />'}, "Remove all" is custom {'<a />'}.
    </ComponentDeps>
    <ComponentDeps
      target="EventDetails"
      deps={['DottedPlaceholder', 'Alert', 'ListItem', 'InputCounter']}
    />
    <hr />
    <img src={require('./images/expanded_event_view.png')} />
  </div>
));
