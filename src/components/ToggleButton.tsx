import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { ToggleButtonWrapper } from '../elements';

type Icons = { [index: string]: JSX.Element };

interface IToggleButton {
  disabled?: boolean;
  defaultChecked?: boolean;
  className?: string;
  onChange: () => {};
  icons?: Icons;
}

const checkedIcon = () => <>on</>;
const uncheckedIcon = () => <>off</>;

const defaultIcons: Icons = {
  checked: checkedIcon(),
  unchecked: uncheckedIcon(),
};

export const ToggleButton = (props: IToggleButton) => {
  const getIcon = (checkedOrUnchecked: string): React.ReactNode => {
    const { icons } = props;
    if (icons === undefined) {
      return defaultIcons[checkedOrUnchecked];
    } else {
      return icons[checkedOrUnchecked];
    }
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
      console.log('test');
      onChange();
      // onChange(!toggle);
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
              <span>{getIcon('checked')}</span>
            </div>
            <div className="wrg-toggle-uncheck">
              <span>{getIcon('unchecked')}</span>
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
