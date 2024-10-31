import React from 'react';

const HtmlObject: React.FC = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="title">Title of UI</div>
        <div className="option-container">
          <div className="option">
            <div className="option-text">Option 1</div>
          </div>
          <div className="option">
            <div className="option-text">Option 2</div>
          </div>
          <div className="option">
            <div className="option-text">Option 3</div>
          </div>
          <div className="option">
            <div className="active-option">Option 4</div>
          </div>
        </div>
        <div className="active-line"></div>
        <div className="box">
          <div className="box-title">Box Title</div>
          <div className="weight-box">
            <div className="weight-box-inner">
              <div className="weight-value-container">
                <div className="weight-value">10</div>
              </div>
            </div>
            <div className="weight-label-container">
              <div className="weight-label">Weight</div>
            </div>
          </div>
          <div className="checkbox-container">
            <div className="checkbox-inner"></div>
          </div>
          <div className="unchecked-box"></div>
          <div className="description-box">
            <div className="description-inner-box">
              <div className="description-label-container">
                <div className="description-label">Description text here...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="large-box">
          <div className="large-box-title">Title</div>
          <div className="counter-container">
            <div className="counter-box">
              <div className="counter-box-border"></div>
              <div className="counter-line"></div>
            </div>
          </div>
          <div className="counter-value">100</div>
          <div className="increment-btn"></div>
          <div className="counter-box-container">
            <div className="box-background"></div>
            <div className="box-border"></div>
            <div className="box-label-container">
              <div className="box-label">Label</div>
            </div>
            <div className="increment-btn-container">
              <div className="increment-btn-box">
                <div className="increment-btn-inner">
                  <div className="increment-btn-text">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="decrement-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default HtmlObject;
