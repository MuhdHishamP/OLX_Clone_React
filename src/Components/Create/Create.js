import React, { Fragment } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useState } from "react";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Image, setImage] = useState(null);
  const date = new Date();
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .storage()
      .ref(`/image/${Image.name}`)
      .put(Image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection("products").add({
            name,
            Category,
            Price,
            url,
            userId: user.uid,
            createdAt: date.toDateString(),
          });
        });
      });
  history.push("/")};

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
            {Image && (
              <img
                alt="Posts"
                width="200px"
                height="200px"
                src={URL.createObjectURL(Image)}
              ></img>
            )}
            <br />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">
              Upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
