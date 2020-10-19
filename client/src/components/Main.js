import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Swal from "sweetalert2";

class Main extends Component {
  submitClick = async (e) => {
    this.qna_name = $("#qna_name").val();
    this.qna_hp = $("#qna_hp").val();
    this.qna_content = $("#qna_content").val();

    this.fnValidate = (e) => {
      if (this.qna_name === "") {
        alert("이름을 다시 확인해주세요.");
        return false;
      } else if (this.qna_hp === "") {
        alert("핸드폰 번호를 다시 확인해주세요.");
        return false;
      } else if (this.qna_content === "") {
        alert("문의내용을 다시 확인해주세요.");
        return false;
      }
      return true;
    };

    if (this.fnValidate()) {
      var jsonstr = $("form[name='frm']").serialize();
      jsonstr = decodeURIComponent(jsonstr);
      var Json_form = JSON.stringify(jsonstr).replace(/\"/gi, "");
      Json_form =
        '{"' + Json_form.replace(/\&/g, '","').replace(/=/gi, '":"') + '"}';

      try {
        const response = await fetch("/qnaregister", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: Json_form,
        });
        const body = await response.text();
        if (body == "succ") {
          this.sweetalertSucc("문의가 완료되었습니다.", false);

          setTimeout(
            function () {
              this.props.history.push("/");
            }.bind(this),
            3000
          );
        } else {
          alert("작업중 오류가 발생하였습니다.");
        }
      } catch (error) {
        alert("작업중 오류가 발생하였습니다.");
      }
    }
  };

  sweetalertSucc = (title, showConfirmButton) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: title,
      showConfirmButton: showConfirmButton,
      timer: 1000,
    });
  };

  render() {
    return (
      <section id="main">
        <section className="thumbnails">
          <div>
            <Link to="suseok/suseok1.jpg">
              <img src="/suseok/suseok1.jpg" alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>

                    
          <div>
            <Link to={require("/suseok/suseok4.jpg")}>
              <img src={require("/suseok/suseok4.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("/suseok/suseok1.jpg")}>
              <img src={require("/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("/suseok/suseok2.jpg")}>
              <img src={require("/suseok/suseok2.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
          <div>
            <Link to={require("/suseok/suseok3.jpg")}>
              <img src={require("/suseok/suseok3.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("/suseok/suseok5.jpg")}>
              <img src={require("/suseok/suseok5.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("/suseok/suseok3.jpg")}>
              <img src={require("/suseok/suseok3.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("/suseok/suseok3.jpg")}>
              <img src={require("/suseok/suseok3.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
          <div>
            <Link to={require("/suseok/suseok4.jpg")}>
              <img src={require("/suseok/suseok4.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("/suseok/suseok1.jpg")}>
              <img src={require("/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("/suseok/suseok2.jpg")}>
              <img src={require("/suseok/suseok2.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
        </section>
        <section>
          <form name="frm" id="frm" action="" onsubmit="" method="post">
            <div className="row uniform">
              <div className="6u 12u$(xsmall)">
                <input
                  name="qna_name"
                  id="qna_name"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="6u$ 12u$(xsmall)">
                <input
                  name="qna_hp"
                  id="qna_hp"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="12u$">
                <textarea
                  name="qna_content"
                  id="qna_content"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <a
                  href="javascript:"
                  className="alt"
                  onClick={(e) => this.submitClick("save", e)}
                >
                  문의하기
                </a>
              </li>
            </ul>
          </form>
        </section>
      </section>
    );
  }
}

export default Main;
