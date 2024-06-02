import React, { useState } from "react";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../helpers/displayCurrency";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  const deleteProduct = async () => {
    const response = await fetch(SummaryApi.deleteProduct.url,{
      method : SummaryApi.deleteProduct.method,
      credentials : 'include',
      headers: {
        "content-type" : 'application/json'
      },
      body: JSON.stringify({
        id: data._id
      })
    });

    const responseData = await response.json()

    if (responseData.success) {
      toast.success(responseData?.message)
      fetchdata()
    }
    if (responseData.error) {
      toast.error(responseData?.message)
    }

  } 

  return (
    <div className="bg-white p-4 rounded ">
      <div className="w-40">
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={data?.productImage[0]}
            className="mx-auto object-fill h-full"
          />
        </div>
        <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>

        <div>
          <p className="font-semibold">
            {displayINRCurrency(data.sellingPrice)}
          </p>

          <div className="flex space-x-2">
            <div
              className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer"
              onClick={() => setEditProduct(true)}
            >
              <MdModeEditOutline />
            </div>
            <div
              className="w-fit ml-auto p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer"
              onClick={deleteProduct}
            >
              <MdDeleteOutline />
            </div>
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
