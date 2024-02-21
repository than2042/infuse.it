"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import { useForm } from "@/context/FormContext";
import IngredientsInput from "./IngredientsInput";
import ToggleInput from "./ToggleInput";
import TextField from "@mui/material/TextField";

export default function ProfileAccordion({
  userInfo,
  cabinetIng,
  favSpirits,
  handleDeleteIng,
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
  } = useForm();

  const handleIngChange = (event, newIngValue) => {
    setIngValue(newIngValue);
    console.log("newIngValue", newIngValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitAction();
      setData("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          My Drinks Cabinet
        </AccordionSummary>
        <AccordionDetails>
          {cabinetIng.map((ing) => (
            <Chip
              key={ing.cabinet_id + "_" + ing.name}
              label={ing.ingredients}
              onDelete={async () => handleDeleteIng(ing.cabinet_id)}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Add to My Drinks Cabinet
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <IngredientsInput
              name="cabinet_id"
              handleIngChange={handleIngChange}
              ingredientsOptions={ingredientsOptions}
              ingValue={ingValue}
            />
            <button
              type="submit"
              className="w-5/12 h-11 bg-pink rounded-md mt-5"
            >
              Save
            </button>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          View Preferences
        </AccordionSummary>
        <AccordionDetails>Current Preferences</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Edit Preferences
        </AccordionSummary>
        <AccordionDetails>Edit Preferences</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Edit User Info
        </AccordionSummary>
        <AccordionDetails>Edit username</AccordionDetails>
      </Accordion>
    </div>
  );
}
