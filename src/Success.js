import React from "react";
import _ from "lodash";

import styles from "./Success.styles";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderGroupAvatarAE() {
    return <div style={styles.groupAvaLeft}>ava ae</div>;
  }

  renderGroupAvatarCE() {
    return <div style={styles.groupAvaRight}>ava ce</div>;
  }

  renderContentWish() {
    return (
      <div style={styles.groupWish}>
        <div style={styles.wrapperWish}>
          <div style={styles.textWish1}>Chúc một nửa của Stockbook</div>
          <div style={styles.textWish2}>Xinh đẹp, mạnh khỏe, hạnh phúc và thành công</div>
        </div>
        <div style={styles.groupDacBiet}>
          <i className="fa fa-long-arrow-down" style={styles.iconDown}/>
          <div style={styles.textDacBiet}>Đặc biệt</div>
          <i className="fa fa-long-arrow-down" style={styles.iconDown}/>
        </div>
      </div>
    );
  }

  renderScreen1() {
    return (
      <div style={styles.screen1}>
        {this.renderGroupAvatarAE()}
        {this.renderContentWish()}
        {this.renderGroupAvatarCE()}
      </div>
    );
  }

  renderScreen2() {
    return <div style={styles.screen2}>renderScreen2</div>;
  }

  render() {
    return (
      <div style={styles.container}>
        {this.renderScreen1()}
        {this.renderScreen2()}
      </div>
    );
  }
}

export default Homepage;
