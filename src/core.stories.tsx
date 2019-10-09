import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from './components/Button';
import { Navbar, NavbarItem } from './components/Navbar';
import { Header } from './components/Header';
import { Dropdown, DropdownMenu, DropdownItem } from './components/Dropdown';
import { TextAvatar } from './components/TextAvatar';
import { NotificationAlert } from './components/NotificationAlert';
import { Checkbox } from './components/Checkbox';
import { Input } from './components/Input';
import { ReviewStatus } from './components/ReviewStatus';
import { DataTable } from './components/DataTable';
import { SearchInput } from './components/SearchInput';
import { Icon } from './components/Icon';
import { Tab, Tabs } from './components/Tabs';
import { ListItem } from './components/List';
import { IconListItem } from './components/IconListItem';
import { ComponentDeps } from './helper/ComponentDeps';
import { CheckboxListItem } from './components/CheckboxListItem';
import { BackBanner } from './components/BackBanner';
import { DndPlaceholder } from './components/DndPlaceholder';
import { DottedBox } from './components/DottedBox';
import { SectionTab } from './components/SectionTab';
import { Alert } from './components/Alert';
import { InputCounter } from './components/InputCounter';
import { DisplayValue } from './components/DisplayValue';
import { PreviewPage } from './components/PreviewPage';
import { IconChain } from './components/IconChain';
import { Accordion } from './components/Accordion';
import { Modal } from './components/Modal';
import { DeleteConfirmationModal } from './components/DeleteConfirmationModal';
import { AddLink } from './components/AddLink';
import { Select } from './components/Select';
import { Panel } from './components/Panel';
import { CheckboxPanel } from './components/CheckboxPanel';
import { TwoColumnPanel } from './components/TwoColumnPanel';
import { PanelPlaceholder } from './components/PanelPlaceholder';

const stories = storiesOf('Core', module);

stories.addDecorator(withInfo as any);
stories.addParameters({
  info: { inline: true, source: false, propTablesExclude: [ComponentDeps] },
});

stories.add('Button', () => (
  <div>
    <Button type="primary">CREATE NEW</Button>
    Examples:
    <div>
      <code>{`
      <Button type="primary">CREATE NEW</Button
      `}</code>
    </div>
    <img src={require('./images/button_primary.png')} />
    <hr />
    <div>
      <code>{`
      <Button type="secondary" block>SAVE</Button
      `}</code>
    </div>
    <img src={require('./images/button_secondary.png')} />
    <hr />
    <div>
      <code>{`
      <Button type="danger">DELETE</Button
      `}</code>
    </div>
    <img src={require('./images/button_danger.png')} />
    <hr />
    <div>
      <code>{`
      <Button type="primary" icon={<svg />}>ADD NEW GROUP</Button
      `}</code>
    </div>
    <img src={require('./images/button_icon.png')} />
  </div>
));

stories.add('Checkbox', () => (
  <div>
    <Checkbox checked>Design</Checkbox>
    Examples:
    <div>
      <code>{`
    <Checkbox checked>Design</Checkbox>
      `}</code>
    </div>
    <img src={require('./images/checkbox.png')} />
    <hr />
    <div>
      <code>{`
    <Checkbox radio>Design</Checkbox>
      `}</code>
    </div>
    <img src={require('./images/checkbox_radio.png')} />
    <div>
      <code>{`
    <Checkbox radio checked radioType="check">Submission Uploaded</Checkbox>
      `}</code>
    </div>
    <img src={require('./images/checkbox_radio_check.png')} />
  </div>
));

stories.add('Input', () => (
  <div>
    <Input label="Title" />
    Examples:
    <div>
      <code>{`
    <Input label="Title" />
      `}</code>
    </div>
    <img src={require('./images/input.png')} />
    <hr />
    <div>
      <code>{`
    <Input label="Description" isMultiline />
      `}</code>
    </div>
    <img src={require('./images/input_multiline.png')} />
    <hr />
    <div>
      <code>{`
    <Input label="Title" value="Topcoder Challenge />
      `}</code>
    </div>
    <img src={require('./images/input_value.png')} />
  </div>
));

stories.add('Navbar', () => (
  <div>
    <Navbar>
      <NavbarItem url="/preview-processes" isActive>
        Review Processes
      </NavbarItem>
      <NavbarItem url="/scorecards">Scorecards</NavbarItem>
      <NavbarItem url="/tools">Tools</NavbarItem>
      <NavbarItem url="/company">Company</NavbarItem>
      <NavbarItem url="/resources">Resources</NavbarItem>
    </Navbar>
    Examples:
    <pre>
      <code>{`
<Navbar>
  <NavbarItem url="/preview-processes" isActive>
    Review Processes
  </NavbarItem>
  <NavbarItem url="/scorecards">Scorecards</NavbarItem>
  <NavbarItem url="/tools">Tools</NavbarItem>
  <NavbarItem url="/company">Company</NavbarItem>
  <NavbarItem url="/resources">Resources</NavbarItem>
</Navbar>
      `}</code>
    </pre>
    <img src={require('./images/navbar.png')} />
  </div>
));

stories.add('TextAvatar', () => (
  <div>
    <TextAvatar circle color="green">
      VG
    </TextAvatar>
    Examples:
    <pre>
      <code>{`
<TextAvatar circle color="green">
  VG
</TextAvatar>`}</code>
    </pre>
    <img src={require('./images/text-avatar-vg.png')} />
    <hr />
    <pre>
      <code>{`
<TextAvatar color="blue">
  DES
</TextAvatar>`}</code>
    </pre>
    <img src={require('./images/text-avatar-des.png')} />
  </div>
));

stories.add('Dropdown', () => (
  <div>
    <DropdownMenu>
      <DropdownItem url="/my-account">My Account</DropdownItem>
      <DropdownItem onClick={() => {}}>Logout</DropdownItem>
    </DropdownMenu>
    <Dropdown popup={<div />}>
      <TextAvatar circle color="green">
        VG
      </TextAvatar>
      Victor George
    </Dropdown>
    Examples:
    <pre>
      <code>{`
<Dropdown
  popup={
    <DropdownMenu>
      <DropdownItem url="/my-account">My Account</DropdownItem>
      <DropdownItem onClick={() => {}}>Logout</DropdownItem>
    </DropdownMenu>
  }
>
  <TextAvatar circle color="green">VG</TextAvatar>
  Victor George
</Dropdown>
      `}</code>
    </pre>
    <img src={require('./images/dropdown.png')} />
  </div>
));

stories.add('NotificationAlert', () => (
  <div>
    <NotificationAlert count={3} popup={<div>todo notification list</div>} />
    Examples:
    <pre>
      <code>{`
<NotificationAlert count={3} popup={<div>todo notification list</div>} />
      `}</code>
    </pre>
    <img src={require('./images/notification_alert.png')} />
  </div>
));

stories.add('ReviewStatus', () => (
  <div>
    <ReviewStatus status="complete" />
    Examples:
    <pre>
      <code>{`
    <ReviewStatus status="complete" />
      `}</code>
    </pre>
    <img src={require('./images/review_status_complete.png')} />
    <hr />
    <pre>
      <code>{`
    <ReviewStatus status="pending" />
      `}</code>
    </pre>
    <img src={require('./images/review_status_pending.png')} />
    <hr />
    <pre>
      <code>{`
    <ReviewStatus status="running" />
      `}</code>
    </pre>
    <img src={require('./images/review_status_running.png')} />
  </div>
));

stories.add('Data Table', () => (
  <div>
    <DataTable
      columns={[
        {
          name: 'title',
          displayName: 'Title',
          sortable: true,
          renderCell: item => (
            <div>
              <TextAvatar color={item.avatarColor}>{item.avatar}</TextAvatar>
              {item.title}
            </div>
          ),
        },
        {
          name: 'dateCreated',
          displayName: 'Date created',
          sortable: true,
          renderCell: item => item.dateCreated,
        },
        {
          name: 'status',
          displayName: 'Status',
          sortable: true,
          renderCell: item => <ReviewStatus status={item.status} />,
        },
        {
          name: 'actions',
          renderCell: item => (
            <div>
              <a>Edit</a>
              &nbsp; | &nbsp;
              <a>Clone</a>
              &nbsp; | &nbsp;
              <a>Delete</a>
            </div>
          ),
        },
      ]}
      items={[
        {
          title: 'Review Process Design',
          avatar: 'DES',
          avatarColor: 'blue' as const,
          dateCreated: '24/10/2018',
          status: 'complete' as const,
        },
      ]}
      total={100}
      isLoading={false}
      sortBy="col"
      sortDesc={false}
      loadMore={() => {}}
    />
    Examples:
    <pre>
      <code>{`
<DataTable
  columns={[
    {
      name: 'title',
      displayName: 'Title',
      sortable: true,
      renderCell: item => (
        <div>
          <TextAvatar color={item.avatarColor}>{item.avatar}</TextAvatar>
          {item.title}
        </div>
      ),
    },
    {
      name: 'dateCreated',
      displayName: 'Date created',
      sortable: true,
      renderCell: item => item.dateCreated,
    },
    {
      name: 'status',
      displayName: 'Status',
      sortable: true,
      renderCell: item => <ReviewStatus status={item.status} />,
    },
    {
      name: 'actions',
      renderCell: item => (
        <div>
          <a>Edit</a>
          &nbsp; | &nbsp;
          <a>Clone</a>
          &nbsp; | &nbsp;
          <a>Delete</a>
        </div>
      ),
    },
  ]}
  items={[
    {
      title: 'Review Process Design',
      avatar: 'DES',
      avatarColor: 'blue' as const,
      dateCreated: '24/10/2018',
      status: 'complete' as const,
    },
  ]}
  total={100}
  isLoading={false}
  sortBy="col"
  sortDesc={false}
  loadMore={() => {}}
/>
      `}</code>
    </pre>
    <img src={require('./images/data-table.png')} />
    <hr />
  </div>
));

stories.add('SearchInput', () => (
  <div>
    <SearchInput placeholder="Search..." />
    Examples:
    <pre>
      <code>{`
    <SearchInput placeholder="Search..." />
      `}</code>
    </pre>
    <img src={require('./images/search_input.png')} />
    <hr />
    <pre>
      <code>{`
    <SearchInput placeholder="Search..." bright size="small" />
      `}</code>
    </pre>
    <img src={require('./images/search_input_bright.png')} />
  </div>
));

stories.add('Icons', () => (
  <div>
    <Icon color="teal">
      <svg />
    </Icon>
    Use this component as a base component for all custom Icons. Examples:
    <pre>
      <code>{`
<SonarQubeIcon />

should render:

<Icon color="teal"><svg ... /></Icon>
      `}</code>
    </pre>
    <img src={require('./images/icon.png')} />
    <br />
    <pre>
      <code>{`
<SonarQubeIcon muted />
      `}</code>
    </pre>
    <img src={require('./images/icon_muted.png')} />
  </div>
));

stories.add('Tabs', () => (
  <div>
    <Tabs selectedIndex={0} onIndexChange={index => {}}>
      <Tab title="Events">content a</Tab>
      <Tab title="Review Steps">content b</Tab>
    </Tabs>
    Examples:
    <pre>
      <code>{`
<Tabs selectedIndex={0} onIndexChange={index => {}}>
  <Tab title="Events">content a</Tab>
  <Tab title="Review Steps">content b</Tab>
</Tabs>
      `}</code>
    </pre>
    <img src={require('./images/tabs.png')} />
  </div>
));

stories.add('ListItem', () => (
  <div>
    <ListItem>Text</ListItem>
    This component should be used as a base component for other ListItem types.
  </div>
));

stories.add('IconListItem', () => (
  <div>
    <IconListItem icon={<div />}>SonarQue</IconListItem>
    Examples:
    <pre>
      <code>{`
    <IconListItem icon={<SonarQubeIcon />}>SonarQue</IconListItem>
      `}</code>
    </pre>
    <img src={require('./images/review_list_item.png')} />
    <hr />
    <pre>
      <code>{`
    <IconListItem muted icon={<SonarQubeIcon />}>SonarQue</IconListItem>
      `}</code>
    </pre>
    <img src={require('./images/review_list_item_muted.png')} />
    <hr />
    <pre>
      <code>{`
    <IconListItem muted icon={<SonarQubeIcon />} appendText="20%">Antivirus Scan</IconListItem>
      `}</code>
    </pre>
    <img src={require('./images/review_list_item_percent.png')} />
    <hr />
    <pre>
      <code>{`
    <IconListItem muted icon={<SonarQubeIcon />} appendText="20%" connectBottom>Antivirus Scan</IconListItem>
      `}</code>
    </pre>
    <img src={require('./images/review_list_item_connect_bottom.png')} />
    <hr />
    <ComponentDeps deps={['ListItem']} />
  </div>
));

stories.add('CheckboxListItem', () => (
  <div>
    <CheckboxListItem>Submission Page Opened</CheckboxListItem>
    Examples:
    <pre>
      <code>{`
    <CheckboxListItem>Submission Page Opened</CheckboxListItem>
      `}</code>
    </pre>
    <img src={require('./images/checkbox_list_item.png')} />
    <hr />
    <pre>
      <code>{`
    <CheckboxListItem checked>Submission Page Opened</CheckboxListItem>
      `}</code>
    </pre>
    <img src={require('./images/checkbox_list_item_checked.png')} />
    <hr />
    <pre>
      <code>{`
    <CheckboxListItem isDragging>Submission Page Opened</CheckboxListItem>
      `}</code>
    </pre>
    <img src={require('./images/checkbox_list_item_dragging.png')} />
    <hr />
    <ComponentDeps deps={['ListItem']} />
  </div>
));

stories.add('BackBanner', () => (
  <div>
    <BackBanner url="/reviews">New Review Process</BackBanner>
    Examples:
    <pre>
      <code>{`
    <BackBanner url="/reviews">New Review Process</BackBanner>
      `}</code>
    </pre>
    <img src={require('./images/back_banner.png')} />
  </div>
));

stories.add('PanelPlaceholder', () => (
  <div>
    <PanelPlaceholder
      icon={<svg />}
      title="Click on add group in the left panel"
      description="Click on the add group to create a new group and start adding questions"
      full
    />
    Examples:
    <pre>
      <code>{`  
    <PanelPlaceholder
      icon={<svg />}
      title="Click on add group in the left panel"
      description="Click on the add group to create a new group and start adding questions"
      full
    />
      `}</code>
    </pre>
    <img src={require('./images/panel_placeholder.png')} />
    <hr />
    <pre>
      <code>{`  
    <PanelPlaceholder
      icon={<svg />}
      title="Drag & drop system events"
      description="Click adn drag in events here to create new event"
    />
      `}</code>
    </pre>
    <img src={require('./images/dnd_placeholder.png')} />
  </div>
));

stories.add('DndPlaceholder', () => (
  <div>
    <DndPlaceholder />
    Examples:
    <pre>
      <code>{`
    <DndPlaceholder />
      `}</code>
    </pre>
    <img src={require('./images/dnd_placeholder.png')} />
    <hr />
    <pre>
      <code>{`
    <DndPlaceholder full />
      `}</code>
    </pre>
    <img src={require('./images/dnd_placeholder_full.png')} />
    <hr />
    <ComponentDeps deps={['PanelPlaceholder']} />
  </div>
));

stories.add('DottedBox', () => (
  <div>
    <DottedBox>Drag review steps here to complete the review process</DottedBox>
    Examples:
    <pre>
      <code>{`
    <DottedBox>Drag review steps here to complete the review process</DottedBox>
      `}</code>
    </pre>
    <img src={require('./images/dotted_box.png')} />
  </div>
));

stories.add('SectionTab', () => (
  <div>
    <SectionTab
      title="Submission Phase Opened"
      isExpanded
      onToggleExpand={() => {}}
      onFullscreen={() => {}}
      onClose={() => {}}
    >
      content
    </SectionTab>
    Examples:
    <pre>
      <code>{`
  <SectionTab
    title="Submission Phase Opened"
    isExpanded
    onToggleExpand={() => {}}
    onFullscreen={() => {}}
    onClose={() => {}}
  >
    <DottedBox>
      Drag review steps here to complete the review process
    </DottedBox>
  </SectionTab>
      `}</code>
    </pre>
    <img src={require('./images/section_tab.png')} />
    <hr />
    <pre>
      <code>{`
  <SectionTab
    title="Copyright & Licenses"
    isExpanded
    onToggleExpand={() => {}}
    onFullscreen={() => {}}
    onClose={() => {}}
    color="blue"
    right={
      <>
        Weight: <InputCounter />
      </>
    }
  >
    content
  </SectionTab>
      `}</code>
    </pre>
    <img src={require('./images/section_tab_blue.png')} />
  </div>
));

stories.add('Alert', () => (
  <div>
    <Alert type="success">
      Hey! it seems like you have 5.00 weightage left to distribute.
    </Alert>
    Examples:
    <pre>
      <code>{`
  <Alert type="success">
    Hey! it seems like you have 5.00 weightage left to distribute.
  </Alert>
      `}</code>
    </pre>
    <img src={require('./images/alert_success.png')} />
    <hr />
    <pre>
      <code>{`
  <Alert type="success">
    Hey! it seems like you have exceeded by 10.00 weightage
  </Alert>
      `}</code>
    </pre>
    <img src={require('./images/alert_error.png')} />
  </div>
));

stories.add('InputCounter', () => (
  <div>
    <InputCounter value={25} onChange={value => {}} />
    Examples:
    <pre>
      <code>{`
<InputCounter value={25} onChange={value => {}} />
      `}</code>
    </pre>
    <img src={require('./images/input_counter.png')} />
  </div>
));

stories.add('DisplayValue', () => (
  <div>
    <DisplayValue label="Title" value="Topcoder Challenge" />
    Examples:
    <pre>
      <code>{`
    <DisplayValue label="Title" value="Topcoder Challenge" />
      `}</code>
    </pre>
    <img src={require('./images/display_value.png')} />
    <hr />
    <pre>
      <code>{`
    <DisplayValue label="TRACK" value={['Design']} />
      `}</code>
    </pre>
    <img src={require('./images/display_value_list.png')} />
  </div>
));

stories.add('PreviewPage', () => (
  <div>
    <PreviewPage title="REVIEW STEPS" onEdit={() => {}}>
      content
    </PreviewPage>
    Examples:
    <pre>
      <code>{`
    <PreviewPage label="REVIEW STEPS" onEdit={() => {}}>
      content
    </PreviewPage>
      `}</code>
    </pre>
    <img src={require('./images/preview_page.png')} />
  </div>
));

stories.add('IconChain', () => (
  <div>
    <IconChain>content</IconChain>
    Examples:
    <pre>
      <code>{`
    <IconChain>
      <Icon1 />
      <Icon2 />
      <Icon3 />
    </IconChain>
      `}</code>
    </pre>
    <img src={require('./images/icon_chain.png')} />
  </div>
));

stories.add('Accordion', () => (
  <div>
    <Accordion
      title="Submission Phase Opened"
      isExpanded={false}
      onToggleExpand={() => {}}
    >
      content
    </Accordion>
    Examples:
    <pre>
      <code>{`
    <Accordion
      title="Submission Phase Opened"
      isExpanded={false}
      onToggleExpand={() => {}}
      right={
        <IconChain>
          <Icon1 />
          <Icon2 />
          <Icon3 />
        </IconChain>
      }
    >
      content
    </Accordion>
   
      `}</code>
    </pre>
    <img src={require('./images/accordion.png')} />
    <hr />
    <pre>
      <code>{`
    <Accordion
      title="Appeals Phase Opened"
      isExpanded={true}
      onToggleExpand={() => {}}
      right={
        <IconChain>
          <Icon1 />
          <Icon2 />
          <Icon3 />
        </IconChain>
      }
    >
      content
    </Accordion>
   
      `}</code>
    </pre>
    <img src={require('./images/accordion_expanded.png')} />
    <hr />
    <pre>
      <code>{`
    <Accordion
      title="Section"
      isExpanded={true}
      onToggleExpand={() => {}}
      onClose={() => {}}
      color="black"
      right={
        <>
          Weight
          <InputCounter />
        </>
      }
    >
      content
    </Accordion>
   
      `}</code>
    </pre>
    <img src={require('./images/accordion_black.png')} />
  </div>
));

stories.add('Modal', () => (
  <div>
    <Modal isOpened>content</Modal>
    This component should be used as a base component for other Modal types.
  </div>
));

stories.add('DeleteConfirmationModal', () => (
  <div>
    <DeleteConfirmationModal isOpened onCancel={() => {}} onDelete={() => {}}>
      Are you sure you want to delete the review process title 'Review Process
      Design'
    </DeleteConfirmationModal>
    Examples:
    <pre>
      <code>{`
  <DeleteConfirmationModal isOpened onCancel={() => {}} onDelete={() => {}}>
    Are you sure you want to delete the review process title 'Review Process
    Design'
  </DeleteConfirmationModal>
      `}</code>
    </pre>
    <img src={require('./images/delete_modal.png')} />
    <hr />
    <ComponentDeps deps={['Modal', 'Button']} />
  </div>
));

stories.add('AddLink', () => (
  <div>
    <AddLink>ADD SECTION</AddLink>
    Examples:
    <pre>
      <code>{`
   <AddLink>ADD SECTION</AddLink>
      `}</code>
    </pre>
    <img src={require('./images/add_link.png')} />
  </div>
));

stories.add('Select', () => (
  <div>
    <Select
      label="Type"
      options={[
        { text: 'Scale 1-4', value: 1 },
        { text: 'Scale 5-9', value: 2 },
      ]}
      value={1}
    />
    Examples:
    <pre>
      <code>{`
  <Select
    label="Type"
    options={[
      { text: 'Scale 1-4', value: 1 },
      { text: 'Scale 5-9', value: 2 },
    ]}
    value={1}
  />
      `}</code>
    </pre>
    <img src={require('./images/select.png')} />
  </div>
));

stories.add('Panel', () => (
  <div>
    <Panel title="01 Question" onClose={() => {}}>
      Content
    </Panel>
    Examples:
    <pre>
      <code>{`
    <Panel
      title="01 Question"
      onClose={() => {}}
    >
      Content
    </Panel>
      `}</code>
    </pre>
    <img src={require('./images/panel.png')} />
    <hr />
    <pre>
      <code>{`
    <Panel
      title="Copyright & Licenses 50.00)"
      onClose={() => {}}
      size="large"
      solid
    >
      Content
    </Panel>
      `}</code>
    </pre>
    <img src={require('./images/panel_large.png')} />
  </div>
));

stories.add('CheckboxPanel', () => (
  <div>
    <CheckboxPanel
      checked={false}
      onChecked={() => {}}
      title="Copyright & Licenses"
    >
      0 sections | 0 questions
      <br />
      <strong>Weight: 50.00</strong>
    </CheckboxPanel>
    Examples:
    <pre>
      <code>{`  
    <CheckboxPanel
      checked={false}
      onChecked={() => {}}
      title="Copyright & Licenses"
      onChecked={() => {}}
    >
      0 sections | 0 questions
      <br />
      <strong>Weight: 50.00</strong>
    </CheckboxPanel>
      `}</code>
    </pre>
    <img src={require('./images/checkbox_panel.png')} />
    <hr />
    <pre>
      <code>{`  
    <CheckboxPanel
      checked
      onChecked={() => {}}
      title="Files Types"
      onChecked={() => {}}
    >
      1 sections | 2 questions
      <br />
      <strong>Weight: 25.00</strong>
    </CheckboxPanel>
      `}</code>
    </pre>
    <img src={require('./images/checkbox_panel_checked.png')} />
  </div>
));

stories.add('TwoColumnPanel', () => (
  <div>
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
    Examples:
    <pre>
      <code>{`  
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
      `}</code>
    </pre>
    <img src={require('./images/two_column_panel.png')} />
    <hr />
    <ComponentDeps deps={['Panel']} />
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
  </div>
));
