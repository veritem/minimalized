import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Props, Minimalized } from '../src';

const meta: Meta = {
  title: 'Minimalized',
  component: Minimalized,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div>
      <button
        style={{
          color: 'white',
          outline: 'none',
          border: 'none',
          backgroundColor: 'blue',
          padding: '10px 6px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <Minimalized open={open} close={() => setIsOpen}>
        <p>Hi</p>
      </Minimalized>
    </div>
  );
};
export const Default = Template.bind({});

Default.args = {};
