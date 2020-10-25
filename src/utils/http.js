import Axios from "axios";
import {toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getMenu = () => {
  return Axios.get(process.env.REACT_APP_GET_MENU);
};

export const searchMenu = (name, by) => {
  console.log(by);
  const url = `${process.env.REACT_APP_SEARCH}?name=${name}&by=${by}`;
  return Axios.get(url);
};

export const insertMenu = (name, picture, price, id_category) => {
  const data = {
    name: name,
    picture: picture,
    price: price,
    id_category: id_category,
  };
  const url = process.env.REACT_APP_INSERT_MENU;

  return Axios.post(url, data, {
    headers: {
      "x-access-token": "bearer " + localStorage.getItem("token"),
      "Content-type": "form",
    },
  })
  .then(res=>{
    if(res.data.isSuccess){
      console.log(res.data.isSuccess)
      toast('Add menu success!',{
        draggable:true,
        autoClose:false,
        transition:Bounce,
      })
    }
    else{
      toast('Add menu failed. please try again!',{
        draggable:true,
        autoClose:false,
        transition:Bounce,
      })
    }
  })
  .catch(err=>{
    toast.error('Network Error',{
      draggable:true,
      autoClose:false,
    })
  })
};

export const addTrans = (invoice, cashier, orders, amount) => {
  const data = {
    invoice: invoice,
    cashier: cashier,
    orders: orders,
    amount: amount,
  };
  const url = process.env.REACT_APP_INSERT_TRANS;
  return Axios.post(url, data, {
    headers: { "x-access-token": "bearer " + localStorage.getItem("token") },
  })
  .then(res=>{
    if(res.data.isSuccess){
      console.log(res.data.isSuccess)
      toast('Order Success!',{
        draggable:true,
        autoClose:false,
        transition:Bounce,
      })
    }
    else{
      toast('Order failed. please try again!',{
        draggable:true,
        autoClose:false,
        transition:Bounce,
      })
    }
  })
  .catch(err=>{
    toast.error('Network Error',{
      draggable:true,
      autoClose:false,
    })
  })
   
};

export const getHistory = (token) => {
  const url = "http://54.198.163.118:8000/history/getall";
  return Axios.get(url, {
    headers: { "x-access-token": "bearer " + token},
  });
};

export const getMoreMenu = (page) => {
  const url = `http://54.198.163.118:8000/getalldata?page=${page}&limit=6`;
  return Axios.get(url);
};
export const deleteMenu = (id) => {
  const url = `http://54.198.163.118:8000/delete?id=${id}`;
  return Axios.delete(url);
};

export const editMenu = (name, image, price, id_category, id_menu) => {
  let data = new FormData();
  if (name !== null) {
    data.append("name", name);
  } else if (image !== null) {
    data.append("image", image);
  } else if (price !== null) {
    data.append("price", price);
  } else if (id_category !== null) {
    data.append("id_category", id_category);
  }
  data.append("id_menu", id_menu);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const url = "http://54.198.163.118:8000/update";
  console.log(FormData);
  return Axios.patch(url, data, config)
};

export const login = (username, password) => {
  const data = {
    username,
    password,
  };
  return Axios.post(process.env.REACT_APP_LOGIN, data);
};
export const register = (username, password) => {
  const data = {
    username,
    password,
  };
  return Axios.post(process.env.REACT_APP_USER_REGIS, data);
};
