import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/app";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       console.log(data);
    //       return data;
    //     });
    //     this.setState({
    //       products,
    //       loading:false
    //       //it means products = products;
    //     });
    //   });
    this.db
      .collection("products")
      // .where("price", "==", 99)        //query some data
      // .where("title", "==", "mouse")
      .orderBy("price", "desc") // sort the data about the give para
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          // console.log(doc.data());
          return "";
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          // console.log(data);
          return data;
        });
        this.setState({
          products,
          //it means products = products;
          loading: false,
        });
      });
  }
  handleIncreaseQuantity = (product) => {
    // console.log("increase th quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products: products,
    // });

    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("document updated!");
      })
      .catch((err) => {
        console.log("Erro occure in increasing the qty :: ", err);
      });
  };
  handleDecreaseQuantity = (product) => {
    if (product.qty === 0) return;
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty -= 1;

    // this.setState({
    //   products,
    // });
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log("decrease in quantity is updated!");
      })
      .catch((err) => {
        console.log("error in decreasing the quantiy :: ", err);
      });
  };
  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);
    // console.log(items);
    // this.setState({
    //   products: items,
    // });
    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("delete product sucessfully!");
      })
      .catch((err) => {
        console.log("error occure in deleting the product :: ", err);
      });
  };
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });
    return cartTotal;
  };
  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 900,
        qty: 3,
        title: "Washing Machine",
      })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((err) => {
        console.log("Error :: ", err);
      });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a product
        </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div className="footer_div">
          <div className="total-div">
            <h4 style={{ margin: 0 }}>Total : {this.getCartTotal()}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
