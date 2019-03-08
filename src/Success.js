import React from "react";
import _ from "lodash";

import styles from "./Success.styles";

const dataUser = {
  huyenho: {
    name: "Chị Huyền",
    avatar:
      "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.15752-9/54207582_681799615572528_8205411092021641216_n.jpg?_nc_cat=102&_nc_oc=AQnNm155Mc0EWC1gd-Cj4FRPpxxULEV94zpuIIV44kSLAYhCcXPThoMQXxgqjVqvA1E&_nc_ht=scontent-hkg3-1.xx&oh=37a42b0ae93e8343b823e311cd597a79&oe=5D152CA8",
    wish: "An lạc"
  },
  linhhoai: {
    name: "Chị Linh Hoài",
    avatar:
      "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.15752-9/53891004_252841032332252_3620895595054497792_n.jpg?_nc_cat=103&_nc_oc=AQmtsfydUok_58piOnV_my46tKNzcVKCWoIGGSJd7V7GuTvD43FFU2kqd-FwLlC1QFg&_nc_ht=scontent.fsgn2-2.fna&oh=9b191b6d4cb080f9f4698006f4987013&oe=5D1815E8",
    wish: "Cái gì cũng phải đẹp."
  },
  linhkim: {
    name: "Linh Kim",
    avatar:
      "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/53253923_290993571581685_8019496693810593792_n.jpg?_nc_cat=107&_nc_oc=AQmJ3m3j1Wbet_Scg3SrAGxqCo5j6Hawipufuc3cr23HfUU-4a6FIvSDEmMHMPKKkEc&_nc_ht=scontent.fsgn2-1.fna&oh=a87fdd730b3822e7cfe9562cbb0c2b11&oe=5D0F8C1B",
    wish: "Luôn được nâng đỡ tâm hồn"
  },
  thuychip: {
    name: "Thùy Chíp",
    avatar:
      "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/53781117_411571342943191_2666487581947985920_n.jpg?_nc_cat=105&_nc_oc=AQnARLBHMUfQ8SabH0sEhkURfYdMQogeGjxb5BW0a3u8r4bD6S5eJ3NoieaLtP1CJek&_nc_ht=scontent.fsgn2-1.fna&oh=fe97f4604f35db276a125706921e38ea&oe=5D1A4E39",
    wish: "Tăng cân cực mạnh"
  },
  mai: {
    name: "Mai Pattie",
    avatar:
      "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/53673320_323636841621108_163891601213489152_n.jpg?_nc_cat=107&_nc_oc=AQleqFJYSZc9bKFtqiN7Kd9sT9mLlrrgUob_DKwe87NRBOXyNZ4MPrb4q7bHwG16TYM&_nc_ht=scontent.fsgn2-1.fna&oh=c4b150f4ca37404ecb2e88fce528a2c0&oe=5D20562B",
    wish: "Nhẹ nhàng tựa làn mây"
  },
  van: {
    name: "Hạ Nhục",
    avatar:
      "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/53226193_625977864539273_8921644060255453184_n.jpg?_nc_cat=107&_nc_oc=AQllLbbTNV76NFI1hmDNIWuvjKOlIU-CkODz-LG13k5dh4xGVmD0qXNHOggDaoutTQM&_nc_ht=scontent.fsgn2-1.fna&oh=776c628b5f1a8ecf02cae32af75df0bf&oe=5D172235",
    wish: "lồi mồm"
  },
  trang: {
    name: "Cáo Trắng",
    avatar:
      "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/53155030_2235469300103442_6151384231575552000_n.jpg?_nc_cat=104&_nc_oc=AQm8fpMXkaJHK0CMU4O9Pv9rSdbWKA-yMie-gFreETbh4HEMm6PsL426ebPgcaBKf6I&_nc_ht=scontent.fsgn2-1.fna&oh=4873b507386df26c59cae77a63e3b31c&oe=5D0EC5E5",
    wish: "Đừng sợ FA"
  }
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderGroupAvatarAE() {
    return <div style={styles.groupAvaLeft}></div>;
  }

  renderGroupAvatarCE() {
    return <div style={styles.groupAvaRight}></div>;
  }

  renderContentWish() {
    return (
      <div style={styles.groupWish}>
        <div style={styles.wrapperWish}>
          <div style={styles.textWish1}>Chúc một nửa của Stockbook</div>
          <div style={styles.textWish2}>
            ***<br></br>Luôn xinh đẹp, mạnh khỏe, hạnh phúc và thành công<br></br>***
          </div>
          <div>
            <img src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.15752-9/53510732_820273494992743_197202646006759424_n.jpg?_nc_cat=106&_nc_oc=AQlbLyzouwCKW1CWqjaBDCKwoDuspoPTaZhLEiKeZ8NbA5tdK8w25jaNXw_Y-zzsjxs&_nc_ht=scontent-hkg3-1.xx&oh=da3d7039fdd2ca2997191a799b50e76d&oe=5D189047" alt="Stockbook" width="100%"></img>
          </div>
        </div>
        <div style={styles.groupDacBiet}>
          <i className="fa fa-long-arrow-down" style={styles.iconDown} />
          <div style={styles.textDacBiet}>Đặc biệt</div>
          <i className="fa fa-long-arrow-down" style={styles.iconDown} />
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
    const nickname = _.get(this, "props.match.params.nickname") || "";
    const user = dataUser[nickname.toLowerCase()];
    if (!user) return null;

    return (
      <div style={styles.screen2}>
        <div style={styles.groupLeft}>
          <div style={styles.fullname}>{`Chúc `}<font color="red">{`${user.name}`}</font></div>
          <div style={styles.wishContent}>{user.wish}</div>
        </div>
        <img style={styles.imageRight} src={user.avatar} alt="avatar" />
      </div>
    );
  }

  render() {
    window.succ = this;
    return (
      <div style={styles.container}>
        {this.renderScreen1()}
        {this.renderScreen2()}
      </div>
    );
  }
}

export default Homepage;
