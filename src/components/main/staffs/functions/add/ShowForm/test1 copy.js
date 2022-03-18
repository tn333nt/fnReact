

export default function Test12() {
    <div className="container_Form">
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Tên
                <input type="text" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Ngày sinh
                <input type="date" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Ngày vào công ty
                <input type="date" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Phòng ban
                <select>
                  <option value="sale">sale</option>
                  <option value="hr">hr</option>
                  <option value="marketing">marketing</option>
                  <option value="it">it</option>
                  <option value="finance">finance</option>
                </select>
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Hệ số lương
                <input type="number" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Số ngày nghỉ còn lại
                <input type="number" />
              </label>
            </div>
            <div className="item_Form">
              <label htmlFor="">
                {" "}
                Số ngày đã làm thêm
                <input type="number" />
              </label>
            </div>
          </div>
}
