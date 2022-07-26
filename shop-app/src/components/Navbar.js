import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Badge, Button, Dropdown, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center text-2xl font-bold">
        <Link to="/" className="no-underline text-emerald-700">
          LeagueX Shop
        </Link>
      </h1>
      <Nav className="ml-96">
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.image}
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>₹ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Nav>

      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link
          to="/signin"
          className="text-xl font-bold no-underline text-emerald-700"
        >
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Navbar;
