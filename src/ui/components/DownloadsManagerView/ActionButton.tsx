import { Box } from '@rocket.chat/fuselage';
import type { AllHTMLAttributes, FC } from 'react';
import React from 'react';

type ActionButtonProps = {
  onClick: AllHTMLAttributes<HTMLAnchorElement>['onClick'];
};

const ActionButton: FC<ActionButtonProps> = (props) => (
  <>
    <Box marginInline={4} withRichContent>
      <a href='#' {...props} />
    </Box>
  </>
);

export default ActionButton;
