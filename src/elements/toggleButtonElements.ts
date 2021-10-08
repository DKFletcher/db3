import styled from 'styled-components';
export const ToggleButtonWrapper = styled.div`
  body {
    /* color: f1f1f1; */
  }
  .wrg-toggle {
    font-size: 0.9em;
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .wrg-toggle-input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .wrg-toggle-check,
  .wrg-toggle-uncheck {
    position: absolute;
    z-index: 2;
    width: 10px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .wrg-toggle-check {
    left: 8px;
  }
  .wrg-toggle-uncheck {
    opacity: 1;
    right: 10px;
  }

  .wrg-toggle-uncheck span,
  .wrg-toggle-check span {
    align-items: center;
    display: flex;
    height: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
  }

  .wrg-toggle-container {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    /* border: solid 1px; */
    /* background-color: #4d4d4d; */
    border: 1px solid;
    box-shadow: inset 0 0 1px, 0 0 1px;

    transition: all 0.2s ease;
  }

  .wrg-toggle-circle {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid;
    box-shadow: inset 0 0 1px, 0 0 1px;
    border-radius: 50%;
    /* background-color: #fafafa; */
    box-sizing: border-box;
    transition: all 0.25s ease;
  }
  .wrg-toggle--checked .wrg-toggle-check {
    opacity: 1;
  }
  .wrg-toggle--checked .wrg-toggle-uncheck {
    opacity: 0;
  }
  .wrg-toggle--checked .wrg-toggle-circle {
    left: 27px;
  }
  .wrg-toggle--disabled {
    opacity: 0.5;
  }
`;
