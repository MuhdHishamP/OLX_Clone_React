import React from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import { useHistory } from "react-router-dom";

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setpostDetails } = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allposts = snapshot.docs.map((product) => ({
          ...product.data(),
          id: product.id,
        }));
        setProducts(allposts);
      });
  });

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span style={{ cursor: "default" }}>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <div
              className="card"
              onClick={() => {
                setpostDetails(product);
                history.push("/view");
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.Price}</p>
                <span className="kilometer">{product.Category}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="../../../Images/e5262d8eebfaab317ff63870ce2b5bcebdcf2463.webp"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 50000</p>
              <span className="kilometer">Mobile Phones</span>
              <p className="name"> iPhone 13</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="../../../Images/p.webp"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 40000</p>
              <span className="kilometer">Mobile Phones</span>
              <p className="name"> Pixel 6</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="../../../Images/r.webp"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 58000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> RXZ</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="../../../Images/fj.webp"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 950000</p>
              <span className="kilometer">Mobile Phones</span>
              <p className="name"> iPhone 13</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
