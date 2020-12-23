import classNames from 'classnames';
import React, { useReducer } from 'react';
import {
  Button,
  ButtonAccent,
  ButtonDanger,
  ButtonOutline,
  ButtonOutlineAccent,
  ButtonOutlineDanger,
  ButtonOutlinePrimary,
  ButtonOutlineSuccess,
  ButtonOutlineWarn,
  ButtonPrimary,
  ButtonSuccess,
  ButtonWarn,
  ButtonGroup,
  ColorIcon,
  Icon
} from '../..';

export const ButtonExamples1 = () => (
  <div className="button-story">
    <Button>Default Button</Button>
    <ButtonPrimary>Primary Button</ButtonPrimary>
    <ButtonAccent>Accent Button</ButtonAccent>
    <ButtonSuccess>Success Button</ButtonSuccess>
    <ButtonWarn>Warn Button</ButtonWarn>
    <ButtonDanger>Danger Button</ButtonDanger>
    <br />
    <ButtonOutline>Outline Button</ButtonOutline>
    <ButtonOutlinePrimary>Primary Outline Button</ButtonOutlinePrimary>
    <ButtonOutlineAccent>Accent Outline Button</ButtonOutlineAccent>
    <ButtonOutlineSuccess>Success Outline Button</ButtonOutlineSuccess>
    <ButtonOutlineWarn>Warn Outline Button</ButtonOutlineWarn>
    <ButtonOutlineDanger>Danger Outline Button</ButtonOutlineDanger>
  </div>
);

export const ButtonExamples2 = () => (
  <div className="button-story">
    <Button disabled>Default Button</Button>
    <ButtonPrimary disabled>Primary Button</ButtonPrimary>
    <ButtonAccent disabled>Accent Button</ButtonAccent>
    <ButtonSuccess disabled>Success Button</ButtonSuccess>
    <ButtonWarn disabled>Warn Button</ButtonWarn>
    <ButtonDanger disabled>Danger Button</ButtonDanger>
    <br />
    <ButtonOutline disabled>Outline Button</ButtonOutline>
    <ButtonOutlinePrimary disabled>Primary Outline Button</ButtonOutlinePrimary>
    <ButtonOutlineAccent disabled>Accent Outline Button</ButtonOutlineAccent>
    <ButtonOutlineSuccess disabled>Success Outline Button</ButtonOutlineSuccess>
    <ButtonOutlineWarn disabled>Warn Outline Button</ButtonOutlineWarn>
    <ButtonOutlineDanger disabled>Danger Outline Button</ButtonOutlineDanger>
  </div>
);

export const ButtonExamples3 = () => (
  <div className="button-story">
    <Button>
      <ColorIcon name="googleCalendar" /> Default Button
    </Button>
    <ButtonOutline>
      Outline Button <Icon name="settings" />
    </ButtonOutline>
    <p>
      Note: Unfortunately, forwarding refs to render components is difficult, so icons are currently only supported in
      standard buttons right now.
    </p>
  </div>
);

export const ButtonExamples4 = () => (
  <div className="button-story">
    <Button as={buttonProps => <a {...buttonProps} />}>Anchor Tag Button</Button>
  </div>
);

export const ButtonExamples5 = () => {
  const [state, toggle] = useReducer<(state: { [x: string]: boolean }, action: string) => { [x: string]: boolean }>(
    (state, action) => {
      const newState = { ...state };
      newState[action] = !state[action];
      return newState;
    },
    {}
  );

  return (
    <div className="button-group-story">
      <ButtonGroup>
        <ButtonPrimary>Left</ButtonPrimary>
        <ButtonPrimary>Middle</ButtonPrimary>
        <ButtonPrimary>Right</ButtonPrimary>
      </ButtonGroup>
      <br />
      <p>{JSON.stringify(state)}</p>
      <ButtonGroup>
        <ButtonPrimary className={classNames({ active: state.left })} onClick={() => toggle('left')}>
          Left
        </ButtonPrimary>
        <ButtonPrimary className={classNames({ active: state.middle })} onClick={() => toggle('middle')}>
          Middle
        </ButtonPrimary>
        <ButtonPrimary className={classNames({ active: state.right })} onClick={() => toggle('right')}>
          Right
        </ButtonPrimary>
      </ButtonGroup>
    </div>
  );
};
