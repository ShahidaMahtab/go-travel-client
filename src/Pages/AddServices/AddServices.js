import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Title from "../Title/Title";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("services added successfully");
          reset();
        }
      });
  };
  return (
    <Container className="pt-5 my-5 mx-auto">
      <Title
        smallTitle="Add Popular Tour To Home Page"
        titleStart="ADD POPULAR"
        titleEnd="TOUR"
      ></Title>
      <div className="mx-auto form-bg p-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-25 mx-auto">
          <div className="mb-3">
            <label for="exampleInputTitle" class="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">Title is required</span>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputImage" class="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              {...register("img", { required: true })}
            />
            {errors.img && (
              <span className="text-danger">Image is required</span>
            )}
          </div>
          <div class="mb-3">
            <label for="exampleInputRating" class="form-label">
              Rating
            </label>
            <input
              type="Number"
              className="form-control"
              {...register("rating", { required: true, maxLength: 4 })}
            />
            {errors.rating && (
              <span className="text-danger">Rating is required</span>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputDescription" class="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              {...register("desc", { required: true })}
            />
            {errors.desc && (
              <span className="text-danger">Description is required</span>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputPrice" class="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">price is required</span>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleInputDays" class="form-label">
              Hours/Days
            </label>
            <input
              type="text"
              className="form-control"
              {...register("days", { required: true })}
            />
            {errors.days && (
              <span className="text-danger">Hours/Days is required</span>
            )}
          </div>
          <button type="submit" class="btn btn-main">
            ADD
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddServices;
