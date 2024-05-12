import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biriyani",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Input validation
    // if (!data.name.trim()) {
    //   toast.error("Please enter a product name.");
    //   return;
    // }

    // if (!data.description.trim()) {
    //   toast.error("Please enter a product description.");
    //   return;
    // }

    // if (!data.price || isNaN(Number(data.price)) || Number(data.price) <= 0) {
    //   toast.error("Please enter a valid price.");
    //   return;
    // }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    //   try {
    //     const response = await axios.post(`${url}/api/food/add`, formData);
    //     if (response.data.success) {
    //       setData({
    //         name: "",
    //         description: "",
    //         price: "",
    //         category: "Salad",
    //       });
    //       setImage(false);
    //       toast.success(response.data.message);
    //     } else {
    //       toast.error(response.data.message);
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     toast.error("An error occurred while adding the food item.");
    //   }
    // };

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Biriyani",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="add">
      <form className="flex_col" onSubmit={onSubmitHandler}>
        <div className="add_img_upload flex_col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
          />
        </div>
        <div className="add_product_name flex_col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Type here"
            name="name"
          />
        </div>
        <div className="add_product_desc flex_col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add_category_price">
          <div className="add_category flex_col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Biriyani">Biriyani</option>
              <option value="Veg">veg</option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Chicken">Chicken</option>
              <option value="Dessert">Dessert</option>
              <option value="Salad">Salad</option>
              <option value="Cake">Cake</option>
            </select>
          </div>
          <div className="add_price flex_col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="₹20"
            />
          </div>
        </div>
        <button type="submit" className="add_button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
