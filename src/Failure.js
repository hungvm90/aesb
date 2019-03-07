import React from "react";
import { createBrowserHistory } from "history";
import _ from "lodash";

const history = createBrowserHistory();

function xoaDau(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

const temp = {
  huyenho: ["hothihuyen", "huyen", "huyenho", "huyenht"],
  linhhoai: ["tranhoailinh", "linhhoai", "linhcoi"],
  linhkim: ["trankimlinh", "linhkim", "linhbe"],
  thuychip: ["phamthithuy", "thuy", "thuychip"],
  mai: ["daothanhmai", "daothithanhmai", "mai", "maipattie"],
  van: ["chuthikhanhvan", "chukhanhvan", "van", "hanhat", "ngaynanglen"],
  trang: [
    "nguyencaothuytrang",
    "trang",
    "caotrang",
    "trangkhongthap",
    "trangcho",
    "trangchoa"
  ]
};

const checker = {};
_.forEach(temp, (arr, key) => {
  _.forEach(arr, name => {
    checker[name] = key;
  });
});

function checkIsNamePass(fullName) {
  if (!fullName) return false;
  const name = xoaDau(fullName)
    .toLowerCase()
    .replace(/\s/g, "");
  return checker[name];
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleProcess = this.handleProcess.bind(this);
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onKeyPress(event) {
    if (event.key === "Enter") {
      this.handleProcess();
    }
  }

  handleProcess() {
    const nickname = checkIsNamePass(this.state.name);
    if (nickname) {
      history.push("/chuc-mung");
      return;
    }
    console.log("mylog handleProcess");
    console.log(
      "mylog nickname của bạn là: ",
      checkIsNamePass(this.state.name)
    );
  }

  render() {
    const { name } = this.state;
    return <div>Sai rồi</div>;
  }
}

export default Homepage;
