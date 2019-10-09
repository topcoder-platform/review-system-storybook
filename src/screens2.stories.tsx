import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ComponentDeps } from './helper/ComponentDeps';
import { ComponentCss } from './helper/ComponentCss';

const stories = storiesOf('Screens Part 2', module);

stories.addDecorator(withInfo as any);
stories.addParameters({
  info: {
    inline: true,
    source: false,
    propTablesExclude: [ComponentDeps, ComponentCss],
  },
});

stories.add('Scorecard Dashboard', () => (
  <div>
    Example Implementation:
    <pre>
      <code>{`
<Dashboard>
  <ScorecardFilter />
  <ScorecardTable />
</Dashboard>
      `}</code>
    </pre>
    <hr />
    <ComponentDeps
      target="ScorecardFilter"
      deps={['Checkbox', 'SearchFilter', 'Button']}
    />
    <ComponentDeps target="ScorecardTable" deps={['DataTable']} />
    <hr />
    <img src={require('./images/scorecard.png')} />
  </div>
));

stories.add('Create Scorecard', () => (
  <div>
    Example Implementation:
    <pre>
      <code>{`
<Dashboard>
  <BackBanner url="/scorecard">New Scorecard</BackBanner>
  <ScorecardSidebar />
  <ScorecardContent />
  <ScorecardForm />
</Dashboard>
      `}</code>
    </pre>
    <hr />
    <ComponentDeps target="ScorecardSidebar" deps={['Button']}>
      "Groups" and "Create a group to start adding questions" should be custom{' '}
      {'<strong>'} and {'<div>'} elements
    </ComponentDeps>
    <ComponentDeps target="ReviewContent" deps={['PanelPlaceholder']} />{' '}
    <ComponentDeps target="ReviewForm" deps={['Input', 'Button', 'Checkbox']}>
      ."TRACK" should be a custom {'<div>'} element.
    </ComponentDeps>
    <hr />
    <img src={require('./images/create_scorecard_empty.png')} />
    <hr />
    <h3>With Non-empty Content</h3>
    <ComponentDeps target="ScorecardSidebar" deps={['CheckboxPanel']} />
    <ComponentDeps
      target="ScorecardContent"
      deps={[
        'SectionTab',
        'InputCounter',
        'Input',
        'AddLink',
        'Accordion',
        'Panel',
        'Select',
      ]}
    />
    <img src={require('./images/create_review_content.png')} />
    <hr />
    Example Implementation of ScorecardGroup:
    <pre>
      <code>{`
  <SectionTab
    title="Copyright & Licenses"
    color="blue"
    isExpanded
    onClose={() => {}}
    onFullscreen={() => {}}
    onToggleExpand={() => {}}
    right={
      <div>
        Weight: <InputCounter value={25} onChange={() => {}} />
      </div>
    }
  >
    <Input label="Group name" value="Copyright and Licenses" />
    <AddLink>Add Section</AddLink>
    <Accordion
      isExpanded
      onToggleExpand={() => {}}
      color="black"
      onClose={() => {}}
      title="Section"
      right={
        <div>
          Weight: <InputCounter value={25} onChange={() => {}} />
        </div>
      }
    >
      <Input label="Group name" value="Section name" />
      <AddLink>Add Question</AddLink>
      <Panel title="01 Question" onClose={() => {}}>
        <Input
          label="Question"
          value="if stockart is allowed in this contest..."
        />
        <Input
          label="Question Guideline"
          value="if stockart is allowed in this contest..."
        />
        <div>
          <Select label="Type" options={[]} value={1}></Select>
          <Input label="Weight" value={25} />
          <Select label="Upload" options={[]} value={1}></Select>
        </div>
      </Panel>
    </Accordion>
  </SectionTab>
      `}</code>
    </pre>
  </div>
));

stories.add('Scorecard Preview', () => (
  <div>
    Example Implementation:
    <pre>
      <code>{`
<Dashboard>
  <BackBanner url="/scorecard">Preview Scorecard</BackBanner>
  <ScorecardPreviewHeader />
  <ScorecardPreview />
</Dashboard>
      `}</code>
    </pre>
    <hr />
    <ComponentCss target="ScorecardPreviewHeader">
      Use custom {'<div />'}, {'<strong />'}, {'<a />'} elements to implement
      this component
    </ComponentCss>
    <ComponentDeps
      target="ScorecardPreview"
      deps={['Panel', 'TwoColumnPanel', 'Button']}
    />
    <hr />
    <img src={require('./images/scorecard_preview.png')} />
    <hr />
    Example Implementation of single element in ScorecardPreview:
    <pre>
      <code>{`
  <Panel title="Copyright & Licenses 50.00)" size="large" solid>
    <TwoColumnPanel
      leftTitle="Stockart (25.00)"
      rightTitle="Weight"
      items={[
        {
          left: (
            <div>
              Question 1.1.1 if stockart is allowed in this contest, are all
              elements photographs only?
              <br />
              Response Type: YES/NO
            </div>
          ),
          right: '25.00',
        },
      ]}
    />
    <TwoColumnPanel
      leftTitle="Fonts (25.00)"
      rightTitle="Weight"
      items={[
        {
          left: (
            <div>
              Question 1.2.1 if stockart is allowed in this contest, are all
              elements photographs only?
              <br />
              Response Type: YES/NO
            </div>
          ),
          right: '25.00',
        },
      ]}
    />
  </Panel>
      `}</code>
    </pre>
  </div>
));
