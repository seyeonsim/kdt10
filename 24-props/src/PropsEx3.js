import { Component } from "react";
import PropTypes from "prop-types";

class PropsEx3 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h2>{text}</h2>
        <button onClick={valid}>버튼</button>
        <br />
      </div>
    );
  }
}

PropsEx3.defaultProps = {
  name: "이건 기본 text props입니다.",
};

PropsEx3.propTypes = {
  name: PropTypes.string,
};

export default PropsEx3;
