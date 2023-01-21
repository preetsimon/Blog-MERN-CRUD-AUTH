import "./create.css";

const Create = () => {
  return (
    <div className="create">
        <img className="createImg" src="https://images.pexels.com/photos/11256785/pexels-photo-11256785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <form className="createForm">
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon fa-solid fa-upload"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="createInput"
            autoFocus={true}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            placeholder="create blog..."
            type="text"
            className="createInput createText"
          ></textarea>
        </div>
        <button className="createSubmit">Create</button>
      </form>
    </div>
  );
};

export default Create;
