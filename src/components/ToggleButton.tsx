import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { ToggleButtonWrapper } from '../elements';

type CheckedUncheckedIcon = React.ReactNode;
type DefaultIcons = { [index: string]: React.ReactNode };

type icon =
  | boolean
  | { checked: CheckedUncheckedIcon; unchecked: CheckedUncheckedIcon }
  | undefined;

interface IToggleButton {
  disabled: boolean;
  defaultChecked: boolean;
  className: string;
  onChange: (state: boolean) => {};
  icons: icon;
}

export const ToggleButton = (props: IToggleButton) => {
  const checkedIcon: CheckedUncheckedIcon = () => <>🌜</>;
  const uncheckedIcon: CheckedUncheckedIcon = () => <>🌞</>;
  const defaultIcons: DefaultIcons = {
    checked: checkedIcon,
    unchecked: uncheckedIcon,
  };

  const getIcon = (
    type: icon,
    checkedOrUnchecked: string
  ): React.ReactNode | null => {
    const { icons } = props;
    if (!icons) {
      return null;
    }
    return typeof type === undefined ? defaultIcons[checkedOrUnchecked] : icons;
  };

  const [toggle, setToggle] = useState(false);

  const { defaultChecked, onChange, disabled, className } = props;

  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
    }
  }, [defaultChecked]);

  const toggleClasses = classNames(
    'wrg-toggle',
    {
      'wrg-toggle--checked': toggle,
      'wrg-toggle--disabled': disabled,
    },
    className
  );

  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    setToggle(!toggle);
    if (typeof onChange === 'function') {
      onChange(!toggle);
    }
  };

  return (
    <ToggleButtonWrapper>
      <div onClick={triggerToggle} className={toggleClasses}>
        <div
          onChange={triggerToggle}
          className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}
        >
          <div className="wrg-toggle-container">
            <div className="wrg-toggle-check">
              <span>{getIcon(props.icons, 'checked')}</span>
            </div>
            <div className="wrg-toggle-uncheck">
              <span>{getIcon(props.icons, 'unchecked')}</span>
            </div>
          </div>
          <div className="wrg-toggle-circle"></div>
          <input
            className="wrg-toggle-input"
            type="checkbox"
            aria-label="Toggle Button"
          />
        </div>
      </div>
    </ToggleButtonWrapper>
  );
};
