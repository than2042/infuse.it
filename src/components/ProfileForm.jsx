"use client";
import SelectAlcOptions from "./SelectAlcOptions";
import SelectSpiritsOptions from "./SelectSpiritsOptions";
import IngredientsInput from "./IngredientsInput";
import ToggleInput from "./ToggleInput";
import TextField from "@mui/material/TextField";
import { useForm } from "@/context/FormContext";
import ProfileFromImage from "@/components/ProfileFromImage";

export default function ProfileForm({
  fav_spiritsOptions,
  ingredientsOptions,
}) {
  const {
    data,
    setData,
    submitAction,
    ingValue,
    setIngValue,
    favValue,
    setFavValue,
    preferences,
    setPreferences,
  } = useForm();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitAction();
      setData("");
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleIngChange = (event, newIngValue) => {
    setIngValue(newIngValue);
  };

  const handleFavChange = (event, newFavValue) => {
    setFavValue(newFavValue);
  };

  return (
    <div>
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="w-9/12 m-auto flex flex-col gap-5 mt-7 mb-5 profile-form"
        >
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            name="username"
            onChange={handleChange}
            className="username"
          />
          <SelectSpiritsOptions
            name="fav_spirits_id"
            handleFavChange={handleFavChange}
            fav_spiritsOptions={fav_spiritsOptions}
            favValue={favValue}
          />
          <SelectAlcOptions
            name="alc_id"
            handleChange={handleChange}
            data={data}
          />
          <ToggleInput
            preferences={preferences}
            setPreferences={setPreferences}
          />
          <div>
            <h2 className="w-11/12 mt-5 text-orange">My Drinks Cabinet</h2>
            <p className="w-11/12 mt-5">
              Please select <span className="text-orange">indigredents</span>{" "}
              for your custom mix selections.
            </p>
            <IngredientsInput
              name="cabinet_id"
              handleIngChange={handleIngChange}
              ingredientsOptions={ingredientsOptions}
              ingValue={ingValue}
            />
          </div>
          <button
            type="submit"
            className="w-5/12 h-11 bg-pink rounded-md mt-5 tablet: text-lg profile-btn"
          >
            Submit
          </button>
        </form>
        <ProfileFromImage />
      </div>
    </div>
  );
}
